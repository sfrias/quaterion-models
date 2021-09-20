import json
import os
from functools import partial
from typing import Dict, List, Type, Callable, Any, Union

import numpy as np
import torch
from torch import nn

from quaterion_models.encoder import Encoder, TensorInterchange, CollateFnType
from quaterion_models.heads.encoder_head import EncoderHead
from quaterion_models.utils.tensors import move_to_device


class MetricModel(nn.Module):
    @classmethod
    def _disable_gradients(cls, model: nn.Module):
        for key, weights in model.named_parameters():
            weights.requires_grad = False

    def __init__(
            self,
            encoders: Union[Encoder, Dict[str, Encoder]],
            head: EncoderHead
    ):
        super(MetricModel, self).__init__()
        self.encoders = encoders
        self.head = head

        self._disable_grads_for_encoders()

    def _disable_grads_for_encoders(self):
        """
        Disable gradients for encoders marked as disabled
        :return:
        """
        if isinstance(self.encoders, dict):
            for encoder in self.encoders.values():
                if not encoder.trainable():
                    self._disable_gradients(encoder)
        else:
            if not self.encoders.trainable():
                self._disable_gradients(self.encoders)

    @classmethod
    def collate_fn(cls,
                   batch: List[dict],
                   encoders_collate_fns: Union[CollateFnType, Dict[str, CollateFnType]]) -> TensorInterchange:
        """
        Construct batches for all encoders

        :param batch:
        :param encoders_collate_fns: Dict (or single) of collate functions associated with encoders
        :return:
        """
        if isinstance(encoders_collate_fns, dict):
            result = dict(
                (key, collate_fn(batch))
                for key, collate_fn in encoders_collate_fns.items()
            )
            return result
        else:
            return encoders_collate_fns(batch)

    def get_collate_fn(self) -> Callable:
        """
        Construct a function to convert input data into neural network inputs

        :return: neural network inputs
        """
        if isinstance(self.encoders, dict):
            return partial(MetricModel.collate_fn, encoders_collate_fns=dict(
                (key, encoder.get_collate_fn())
                for key, encoder in self.encoders.items()
            ))
        else:
            return partial(MetricModel.collate_fn,
                           encoders_collate_fns=self.encoders.get_collate_fn())

    def encode(self,
               inputs: Union[List[Any], Any],
               batch_size=32,
               to_numpy=True
               ) -> Union[torch.Tensor, np.ndarray]:

        """
        Encode data in batches

        :param inputs: list of input data to encode
        :param batch_size:
        :param to_numpy:
        :return: Numpy array or torch.Tensor of shape [input_size x embedding_size]
        """
        self.eval()
        device = next(self.parameters()).device
        collate_fn = self.get_collate_fn()

        input_was_list = True
        if not isinstance(inputs, list):
            input_was_list = False
            inputs = [inputs]

        all_embeddings = []

        for start_index in range(0, len(inputs), batch_size):
            input_batch = inputs[start_index:start_index + batch_size]
            features = collate_fn(input_batch)
            features = move_to_device(features, device)

            with torch.no_grad():
                embeddings = self.forward(features)
                embeddings = embeddings.detach()
                if to_numpy:
                    embeddings = embeddings.cpu().numpy()
                all_embeddings.append(embeddings)

        if to_numpy:
            all_embeddings = np.concatenate(all_embeddings, axis=0)
        else:
            all_embeddings = torch.cat(all_embeddings, dim=0)

        if not input_was_list:
            all_embeddings = all_embeddings[0]

        return all_embeddings

    def forward(self, batch):
        if isinstance(self.encoders, dict):
            embeddings = [
                (key, encoder.forward(batch[key]))
                for key, encoder in self.encoders.items()
            ]
            # Order embeddings by key name, to ensure reproduction
            embeddings = sorted(embeddings, key=lambda x: x[0])

            # Only embedding tensors of shape [batch_size x encoder_output_size]
            embedding_tensors = [embedding[1] for embedding in embeddings]

            # Shape: [batch_size x sum( encoders_emb_sizes )]
            joined_embeddings = torch.cat(embedding_tensors, dim=1)
        else:
            # Shape: [batch_size x encoder_output_size]
            joined_embeddings = self.encoders.forward(batch)

        # Shape: [batch_size x output_emb_size]
        result_embedding = self.head(joined_embeddings)

        return result_embedding

    @classmethod
    def _get_head_path(cls, directory: str):
        return os.path.join(directory, 'head')

    @classmethod
    def _get_encoders_path(cls, directory: str):
        return os.path.join(directory, 'encoders')

    def save(self, output_path: str):
        head_path = self._get_head_path(output_path)
        os.mkdir(head_path)
        self.head.save(head_path)

        head_config = {
            "class": self.head.__class__.__qualname__,
            "module": self.head.__module__,
        }

        encoders_path = self._get_encoders_path(output_path)
        os.mkdir(encoders_path)

        encoders_config = []

        if isinstance(self.encoders, dict):
            for encoder_key, encoder in self.encoders.items():
                encoder_path = os.path.join(encoders_path, encoder_key)
                os.mkdir(encoder_path)
                encoder.save(encoder_path)
                encoders_config.append({
                    "key": encoder_key,
                    "module": encoder.__module__,
                    "class": encoder.__class__.__qualname__
                })
        else:
            self.encoders.save(encoders_path)
            encoders_config = {
                "module": self.encoders.__module__,
                "class": self.encoders.__class__.__qualname__
            }

        with open(os.path.join(output_path, 'config.json'), 'w') as f_out:
            json.dump({
                "encoders": encoders_config,
                "head": head_config
            }, f_out)

    @classmethod
    def load(cls, input_path: str) -> 'MetricModel':
        pass

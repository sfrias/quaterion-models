Search.setIndex({docnames:["index","modules","quaterion_models","quaterion_models.encoders","quaterion_models.encoders.encoder","quaterion_models.encoders.extras","quaterion_models.encoders.extras.fasttext_encoder","quaterion_models.encoders.switch_encoder","quaterion_models.heads","quaterion_models.heads.empty_head","quaterion_models.heads.encoder_head","quaterion_models.heads.gated_head","quaterion_models.heads.skip_connection_head","quaterion_models.heads.softmax_head","quaterion_models.heads.stacked_projection_head","quaterion_models.heads.widening_head","quaterion_models.model","quaterion_models.modules","quaterion_models.modules.simple","quaterion_models.types","quaterion_models.utils","quaterion_models.utils.classes","quaterion_models.utils.tensors"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["index.rst","modules.rst","quaterion_models.rst","quaterion_models.encoders.rst","quaterion_models.encoders.encoder.rst","quaterion_models.encoders.extras.rst","quaterion_models.encoders.extras.fasttext_encoder.rst","quaterion_models.encoders.switch_encoder.rst","quaterion_models.heads.rst","quaterion_models.heads.empty_head.rst","quaterion_models.heads.encoder_head.rst","quaterion_models.heads.gated_head.rst","quaterion_models.heads.skip_connection_head.rst","quaterion_models.heads.softmax_head.rst","quaterion_models.heads.stacked_projection_head.rst","quaterion_models.heads.widening_head.rst","quaterion_models.model.rst","quaterion_models.modules.rst","quaterion_models.modules.simple.rst","quaterion_models.types.rst","quaterion_models.utils.rst","quaterion_models.utils.classes.rst","quaterion_models.utils.tensors.rst"],objects:{"":[[2,0,0,"-","quaterion_models"]],"quaterion_models.encoders":[[4,0,0,"-","encoder"],[5,0,0,"-","extras"],[7,0,0,"-","switch_encoder"]],"quaterion_models.encoders.encoder":[[4,1,1,"","Encoder"]],"quaterion_models.encoders.encoder.Encoder":[[4,2,1,"","disable_gradients_if_required"],[4,2,1,"","embedding_size"],[4,2,1,"","forward"],[4,2,1,"","get_collate_fn"],[4,2,1,"","load"],[4,2,1,"","save"],[4,2,1,"","trainable"],[4,3,1,"","training"]],"quaterion_models.encoders.extras":[[6,0,0,"-","fasttext_encoder"]],"quaterion_models.encoders.extras.fasttext_encoder":[[6,1,1,"","FasttextEncoder"],[6,4,1,"","load_fasttext_model"]],"quaterion_models.encoders.extras.fasttext_encoder.FasttextEncoder":[[6,2,1,"","aggregate"],[6,3,1,"","aggregation_options"],[6,2,1,"","embedding_size"],[6,2,1,"","forward"],[6,2,1,"","get_collate_fn"],[6,2,1,"","get_tokens"],[6,2,1,"","load"],[6,2,1,"","save"],[6,2,1,"","trainable"],[6,3,1,"","training"]],"quaterion_models.encoders.switch_encoder":[[7,1,1,"","SwitchEncoder"],[7,4,1,"","inverse_permutation"]],"quaterion_models.encoders.switch_encoder.SwitchEncoder":[[7,2,1,"","disable_gradients_if_required"],[7,2,1,"","embedding_size"],[7,2,1,"","encoder_selection"],[7,2,1,"","forward"],[7,2,1,"","get_collate_fn"],[7,2,1,"","load"],[7,2,1,"","save"],[7,2,1,"","switch_collate_fn"],[7,2,1,"","trainable"],[7,3,1,"","training"]],"quaterion_models.heads":[[9,0,0,"-","empty_head"],[10,0,0,"-","encoder_head"],[11,0,0,"-","gated_head"],[12,0,0,"-","skip_connection_head"],[13,0,0,"-","softmax_head"],[14,0,0,"-","stacked_projection_head"],[15,0,0,"-","widening_head"]],"quaterion_models.heads.empty_head":[[9,1,1,"","EmptyHead"]],"quaterion_models.heads.empty_head.EmptyHead":[[9,2,1,"","forward"],[9,5,1,"","output_size"],[9,3,1,"","training"]],"quaterion_models.heads.encoder_head":[[10,1,1,"","EncoderHead"]],"quaterion_models.heads.encoder_head.EncoderHead":[[10,2,1,"","forward"],[10,2,1,"","get_config_dict"],[10,2,1,"","load"],[10,5,1,"","output_size"],[10,2,1,"","save"],[10,3,1,"","training"]],"quaterion_models.heads.gated_head":[[11,1,1,"","GatedHead"]],"quaterion_models.heads.gated_head.GatedHead":[[11,2,1,"","forward"],[11,5,1,"","output_size"],[11,2,1,"","reset_parameters"],[11,3,1,"","training"]],"quaterion_models.heads.skip_connection_head":[[12,1,1,"","SkipConnectionHead"]],"quaterion_models.heads.skip_connection_head.SkipConnectionHead":[[12,2,1,"","forward"],[12,5,1,"","output_size"],[12,2,1,"","reset_parameters"],[12,3,1,"","training"]],"quaterion_models.heads.softmax_head":[[13,1,1,"","SoftmaxEmbeddingsHead"]],"quaterion_models.heads.softmax_head.SoftmaxEmbeddingsHead":[[13,2,1,"","forward"],[13,5,1,"","output_size"],[13,3,1,"","training"]],"quaterion_models.heads.stacked_projection_head":[[14,1,1,"","StackedProjectionHead"]],"quaterion_models.heads.stacked_projection_head.StackedProjectionHead":[[14,2,1,"","forward"],[14,2,1,"","get_config_dict"],[14,5,1,"","output_size"],[14,3,1,"","training"]],"quaterion_models.heads.widening_head":[[15,1,1,"","WideningHead"]],"quaterion_models.heads.widening_head.WideningHead":[[15,2,1,"","get_config_dict"],[15,3,1,"","training"]],"quaterion_models.model":[[16,1,1,"","MetricModel"]],"quaterion_models.model.MetricModel":[[16,2,1,"","collate_fn"],[16,2,1,"","encode"],[16,2,1,"","forward"],[16,2,1,"","get_collate_fn"],[16,2,1,"","get_encoders_output_size"],[16,2,1,"","load"],[16,2,1,"","save"],[16,2,1,"","train"],[16,3,1,"","training"]],"quaterion_models.modules":[[18,0,0,"-","simple"]],"quaterion_models.modules.simple":[[18,1,1,"","ActivationFromFnName"]],"quaterion_models.modules.simple.ActivationFromFnName":[[18,2,1,"","forward"],[18,3,1,"","training"]],"quaterion_models.utils":[[21,0,0,"-","classes"],[22,0,0,"-","tensors"]],"quaterion_models.utils.classes":[[21,4,1,"","restore_class"],[21,4,1,"","save_class_import"]],"quaterion_models.utils.tensors":[[22,4,1,"","move_to_device"]],quaterion_models:[[3,0,0,"-","encoders"],[8,0,0,"-","heads"],[16,0,0,"-","model"],[17,0,0,"-","modules"],[19,0,0,"-","types"],[20,0,0,"-","utils"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","property","Python property"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:property"},terms:{"0":15,"32":16,"4":15,"abstract":4,"case":7,"class":[2,4,6,7,9,10,11,12,13,14,15,16,18,20],"default":16,"do":22,"float":15,"function":[4,6,7,9,10,14,16,18],"int":[4,6,7,9,10,11,12,13,14,15],"return":[4,6,7,10,11,12,13,14,15,16,21],"true":[6,16],"while":[9,10,14,16,18],For:7,If:[4,6,7],In:7,__init__:[10,14,15],about:21,activation_fn:[14,15,18],activationfromfnnam:18,affect:[4,6,7,16],afterward:[9,10,14,16,18],aggreg:6,aggregation_opt:6,all:[6,9,10,14,16,18,22],allow:7,altern:7,although:[9,10,14,16,18],amount:11,amplifi:11,an:7,ani:[6,7,10,14,15,16,21],ar:[6,16],architectur:15,arrai:16,associ:16,avg:6,base:[4,6,7,9,10,11,12,13,14,15,16,18],batch:[4,6,7,16],batch_siz:[4,6,7,11,12,13,16],batchnorm:16,behavior:16,bool:[4,6,7,9,10,11,12,13,14,15,16,18],cach:[4,6,7],calcul:16,call:[4,6,7,9,10,14,16,18],callabl:16,care:[9,10,14,16,18],certain:16,checkpoint:[4,6,7],classmethod:[4,6,7,10,16],collat:16,collate_fn:16,collatefntyp:[4,6,7],combin:6,compon:11,comput:[9,10,14,16,18],concaten:6,connect:12,construct:[10,14,15,16,18],contain:22,content:1,convert:[4,6,7,16],cpu:22,creat:[4,6,7],current:[4,6,7],data:[4,6,7,16,21],decid:7,declar:[4,7],defin:[4,6,7,9,10,14,16,18],detail:16,devic:22,dict:[7,10,14,15,16,21],directori:[4,6,7],disabl:[4,7,11],disable_gradients_if_requir:[4,7],document:16,dropout:16,e:16,effect:16,embed:[4,6,7,11],embedding_s:[4,6,7,16],empty_head:[2,8],emptyhead:9,encod:[1,2,16],encoder_head:[2,8],encoder_select:7,encoderhead:[9,10,11,12,13,14,16],encoders_collate_fn:16,etc:16,evalu:16,even:11,everi:[9,10,14,16,18],exampl:7,expansion_factor:15,extra:[2,3],fals:16,fasttext:6,fasttext_encod:[3,5],fasttextencod:6,flag:[4,6,7],former:[9,10,14,16,18],forward:[4,6,7,9,10,11,12,13,14,16,18],from:[4,6,7,18],g:16,gate:12,gated_head:[2,8],gatedhead:11,gener:6,get_collate_fn:[4,6,7,16],get_config_dict:[10,14,15],get_encoders_output_s:16,get_token:6,given:[6,7,16,22],gpu:22,gradient:[4,7],ha:16,have:11,head:[1,2,16],hook:[9,10,14,16,18],idea:12,ignor:[9,10,14,16,18],imag:7,implement:15,index:0,infer:[4,6,7],info:21,inform:21,input:[4,6,7,11,16,18],input_dim:13,input_embedding_s:[9,10,11,12,13,14,15],input_path:[4,6,7,10,16],input_s:16,input_vector:[9,10,11,12,13,14],instanc:[9,10,14,16,18],instanti:[4,6,7],instead:[4,6,7,9,10,14,16,18],inverse_permut:7,just:[4,6,7],keep:6,kwarg:[10,13],latter:[9,10,14,16,18],layer:[11,14],list:[6,14,16],load:[4,6,7,10,16],load_fasttext_model:6,max:6,metricmodel:16,min:6,minim:11,mmap:6,mode:16,model:[1,2,4,6,7],model_path:6,modul:[0,1],move:22,move_to_devic:22,multipl:6,name:[7,18,21],narrow:15,ndarrai:16,need:[9,10,14,16,18],network:16,neural:16,nn:18,none:[6,11,12],noth:22,number:14,numpi:16,obj:[21,22],object:21,on_disk:6,one:[6,9,10,14,16,18],onli:16,oper:6,option:[6,7],other:7,out:6,output:[14,16],output_group:13,output_path:[4,6,7,10,16],output_s:[9,10,11,12,13,14],output_size_per_group:13,overridden:[9,10,14,16,18],packag:1,page:0,param:[16,21],paramet:[4,6,7,10,11,12,13,14,15,16,21],particular:16,pass:[9,10,14,16,18],path:[4,6,7],perform:[9,10,14,16,18],perm:7,persist:[4,6,7],piec:7,possibl:22,process:[4,6,7],project:14,properti:[9,10,11,12,13,14],provid:[4,6,7],ram:6,raw:[4,6,7],recip:[9,10,14,16,18],record:7,regist:[9,10,14,16,18],relat:7,relu:[14,15],represent:7,requir:[4,6,7],reset_paramet:[11,12],residu:12,restore_class:21,result:[4,6,7],run:[9,10,14,16,18],savabl:[10,14,15],save:[4,6,7,10,16],save_class_import:21,search:0,see:16,self:[13,16],sequenti:18,serial:21,serializ:[10,14,15,21],set:[11,16],shape:[4,6,7,11,12,13,16],share:7,should:[7,9,10,14,16,18,22],silent:[9,10,14,16,18],simpl:[2,17],sinc:[9,10,14,16,18],singl:16,size:[4,6,7,14,16],skip_connection_head:[2,8],skipconnectionhead:12,small:11,softmax_head:[2,8],softmaxembeddingshead:13,some:11,sourc:[4,6,7,9,10,11,12,13,14,15,16,18,21,22],specifi:[6,14,22],stack:14,stacked_projection_head:[2,8],stackedprojectionhead:[14,15],state:[4,6,7],str:[4,6,7,10,14,15,16,18],structur:22,subclass:[9,10,14,16,18],submodul:1,subpackag:1,suitabl:[4,6,7,11],switch_collate_fn:7,switch_encod:[2,3],switchencod:7,take:[9,10,14,16,18],tensor:[2,4,6,7,9,10,11,12,13,14,16,18,20],tensorinterchang:[4,7],text:7,thei:[16,22],them:[6,9,10,14,16,18],thi:[4,6,7,9,10,11,14,16,18],to_numpi:16,token:6,torch:[12,16],total:16,train:[4,6,7,9,10,11,12,13,14,15,16,18],trainabl:[4,6,7,11],type:[1,2,6],union:16,unit:12,us:[6,7,18],util:[1,2],vector:6,vector_s:11,what:6,whether:16,which:[6,7],wide:15,widening_head:[2,8],wideninghead:15,within:[9,10,14,16,18],x:16},titles:["Welcome to Quaterion Models\u2019s documentation!","quaterion_models","quaterion_models package","quaterion_models.encoders package","quaterion_models.encoders.encoder module","quaterion_models.encoders.extras package","quaterion_models.encoders.extras.fasttext_encoder module","quaterion_models.encoders.switch_encoder module","quaterion_models.heads package","quaterion_models.heads.empty_head module","quaterion_models.heads.encoder_head module","quaterion_models.heads.gated_head module","quaterion_models.heads.skip_connection_head module","quaterion_models.heads.softmax_head module","quaterion_models.heads.stacked_projection_head module","quaterion_models.heads.widening_head module","quaterion_models.model module","quaterion_models.modules package","quaterion_models.modules.simple module","quaterion_models.types package","quaterion_models.utils package","quaterion_models.utils.classes module","quaterion_models.utils.tensors module"],titleterms:{"class":21,content:[2,3,5,8,17,19,20],document:0,empty_head:9,encod:[3,4,5,6,7],encoder_head:10,extra:[5,6],fasttext_encod:6,gated_head:11,head:[8,9,10,11,12,13,14,15],indic:0,model:[0,16],modul:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],packag:[2,3,5,8,17,19,20],quaterion:0,quaterion_model:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],s:0,simpl:18,skip_connection_head:12,softmax_head:13,stacked_projection_head:14,submodul:[2,3,5,8,17,20],subpackag:[2,3],switch_encod:7,tabl:0,tensor:22,type:19,util:[20,21,22],welcom:0,widening_head:15}})
/**
 * @author yanpeng
 */
 var Interface=function(name,methods){
     if(arguments.length!=2){
         throw new Error("arguments length is expected 2")
     }
     this.name=name;
     this.methods=[];
     for(var i=0,len=methods.length;i<len;i++){
         if(typeof method[i]!=="string"){
             throw new Error("the method name must be string")
         }
         this.methods.push(methods[i]);
     }
 }
 
 Interface.ensureImplements=function(object){
     if(arguments.length<2){
         throw new Error("arguments length is expected at least 2")
     }
     
     for(var i=0,len=arguments.length;i<len;i++){
         var interface = arguments[i];
         if(interface.constructor!==Interface){
             throw new Error("arguments tow and above to be instanceof Interface");
         }
         for (var j=0,methodslen=interface.methods.length; j < methodslen; j++) {
           var method=interface.methods[j];
           if(!object[method]||typeof object[method]!=="function"){
               throw new Error("object does not implemet the interface .Method method was not found")
           }
         };
     }
 }

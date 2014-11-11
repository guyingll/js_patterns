/**
 * @author yanpeng
 */
var Singleton={
    attribute1: true,
    attribute2: 10,
    
    method1:function(){
        
    },
    
    method2:function(arg){
        console.log(arg)
    }
}
Singleton.attribute1=false;
Singleton.method2("test");

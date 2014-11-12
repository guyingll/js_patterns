/**
 * 分支技术
 *  通过浏览器能力检测决定使用何种分支
 * @author yanpeng
 */
var SimpleXhrFactory=(function(){
    var standard={
        createXhrObject:function(){
            return new XMLHttpRequest();
        }
    };
    
    var activeXnew={
        createXhrObject:function(){
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
    };
    
    var activeXold={
        createXhrObject:function(){
            return new ActiveXObject("Msxml2.XMLHTTP");
        }
    }
    
    var testObject;
    try{
        testObject=standard.createXhrObject();
        return testObject;
    }catch(e){
        try{
             testObject=activeXnew.createXhrObject();
             return testObject;
        }catch(e){
            try{
                testObject=activeXold.createXhrObject();
                return testObject;
            }catch(e){
                throw new Error("No XHR object found in this environment");
            }
        }
    }
})()

console.log(SimpleXhrFactory);

/**
 * 使用闭包来实现私有成员
 * @author yanpeng
 */
var GiantCorp={
    
}

GiantCorp.DateParse=(function (){
    var uniqueInstance;
    function constructor(){
        //私有属性方法
        var reg=/\s/;
        
        var _stripwhitespace=function(str){
            return str.replace(reg,'');
        };
        
        var _stringSplit=function(str,delimiter){
            return str.split(delimiter);
        };
        
        //公有属性方法
        return { 
          stringToArray:function(str,delimiter,stripWS){
                if(stripWS){
                    str=_stripwhitespace(str);
                }
                var outputArray=_stringSplit(str,delimiter);
                return outputArray;
            }
        }
    }
    return {
        getInstance:function(){
            if(!uniqueInstance){
                uniqueInstance=constructor();
            }
            return uniqueInstance;
        }
    }
    
})();

console.log(GiantCorp.DateParse.getInstance().stringToArray("test,1,2,3",",",true));

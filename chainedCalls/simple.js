/**
 * @author yanpeng
 */

//返回获得的html对象
function $(){
    var elements=[];
    for(var i=0,len=arguments.length;i<len;i++){
        var element=arguments[i];
        if(typeof element==='string'){
            element=document.getElementById(element);
        }
        if(arguments.length==1){
            return element;
        }
        elements.push(element);
    }
    return elements;
}
/**
 * @author yanpeng
 */

//解决浏览器差距的获取XHR工具
var asyncRequest=(function(){
    function handleReadyState(o,callback){
        var poll=window.setInterval(function(){
            if(o&&o.readyState==4){
                callback(o);
            }
        },50);
    }
    
    var getXHR=function(){
        var http;
        try{
            http=new XMLHttpRequest();
            getXHR=function(){
                return new XMLHttpRequest();
            }
        }catch(e){
            var msxml={
                'MSXML2.XMLHTTP.3.0',
                'MSXML2.XMLHTTP',
                'Microsoft.XMLHTTP'
            };
            for(var i=0,len=msxml.length;i<len;i++){
                try{
                    http=new ActiveXObject(msxml[i]);
                    getXHR=function(){
                        return new ActiveXObject(msxml[i]);
                    }
                    break;
                }catch(e){}
            }
        }
        return http;
    }
    return function(method,uri,callback,postData){
        var http=getXHR();
        http.open(method,uri,true);
        handleReadyState(http,callback);
        http.send(postData||null);
        return http;
    };
})()

//链式风格扩充函数
Function.prototype.method=function(name,fn){
    this.prototype[name]=fn;
    return this;
}

//添加forEach和filter函数
if(!Array.prototype.forEach){
    Array.method("forEach",function(fn,thisObj){
        var scope=thisObj||window;
        for(var i=0;i<this.length;i++){
            fn.call(scope,this[i],i,this);
        }
    });
}

if(!Array.prototype.filter){
    Array.method("filter",function(fn,thisObj){
        var scope=thisObj||window;
        var a[];
        for(var i=0;i<this.length;i++){
            if(!fn.call(scope,this[i],i,this)){
                continue;
            }
            a.push(this[i]);
        }
        return a;
    })
}

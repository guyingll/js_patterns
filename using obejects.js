var Anim=function(){
    
}

/*
	1. add  method

Anim.prototype.start=function(){
    
}

Anim.prototype.stop=function(){
    
}
*/

/*
	2. package attr

Anim.prototype={
    start:function(){
        
    },
    stop:function(){
        
    }
}

*/

/*
	3. create Method to add 

*/

Function.prototype.addMethod=function(name,fn){
    this.prototype[name]=fn;
    return this;
};

Anim.addMethod('start',function(){console.log("start")}).addMethod('stop',function(){console.log("stop")})

var myAnim=new Anim();

myAnim.start();
myAnim.stop();


/**
 * mixin class (掺元类) 通过扩充的方式让类共享函数
 * @author yanpeng
 */
var Mixin=function(){};
Mixin.prototype={
    serialize:function(){
        var output=[];
        for(key in this){
            output.push(key+":"+this[key]);
        }
        return output.join(", ");
    },
    test:function(){
        
    }
}

//将工具类中的方法全部扩充到Author中去
function augment(receivingClass,givingClass){
    for(methodName in givingClass.prototype){
        if(!receivingClass.prototype[methodName]){
            receivingClass.prototype[methodName]=givingClass.prototype[methodName]
        }
    }
}

function Author(name,books){
    this.name=name;
    //sub own consturctors
    this.books=books;
}
augment(Author,Mixin,"serialize");

var author=new Author("Json",["the json book"]);
console.log(author.serialize());


//指定扩充函数
function augment(receivingClass,givingClass){
    if(arguments[2]){
        for(var i=2,len=arguments.length;i<len;i++){
            receivingClass.prototype[arguments[i]]=givingClass.prototype[arguments[i]]
        }
    }else{
        for(methodName in givingClass.prototype){
            if(!receivingClass.prototype[methodName]){
                receivingClass.prototype[methodName]=givingClass.prototype[methodName]
            }
        }
    }
}
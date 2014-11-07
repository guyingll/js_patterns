/**
 * 提取extend方法
 * 优点：不用每次都写相同的extend方法
 * 缺点：构造函数中超类的名字被固化
 * @author yanpeng
 */
function extend(subClass,superClass){
    //消除superClass中的属性，由后面的子类的构造函数构建
    var F=function(){}
    F.prototype=superClass.prototype;
    
    subClass.prototype=new F();
    subClass.prototype.constructor=subClass;
}

//user it
//superclass
function Person(name){
    this.name=name;
}

Person.prototype.showName=function(){
    return this.name;
}

var ps=new Person("json");
ps.showName();


//subclass

function Author(name,books){
    //super constuctors
    Person.call(this,name);
    //sub own consturctors
    this.books=books;
}
extend(Author,Person);

Author.prototype.showBooks=function(){
    return this.books;
}


var at=new Author("Rose Harms",["js patterns"]);
console.log(at.showBooks());
console.log(at.showName());


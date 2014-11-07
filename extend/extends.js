/**
 * 抵用超类构造方法，继承超类中属性
 * 设置原型链，使用超类的prototype
 * 设置原型链中的constructor 指向于自身
 * 在原型链上添加自身的原型方法
 * @author yanpeng
 */

//superclass
function Person(name){
    this.genre="man";
    this.name=name;
}

Person.prototype.showName=function(){
    return this.name;
}

Person.prototype.sayA=function(){
    return "sayA";
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


//super prototype and super's constructor
Author.prototype=new Person();

//sub prototype constructor
Author.prototype.constructor=Author;

//sub own prototype
Author.prototype.showBooks=function(){
    return this.books;
}

Author.prototype.sayA=function(){
    return "sayAuthor";
}

var p1=new Person("The Harman");
var at=new Author();
console.log(at.showName());
console.log(p1.showName());
console.log(p1.genre);
console.log(at.genre);


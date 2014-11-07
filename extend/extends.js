/**
 * 抵用超类构造方法，继承超类中属性
 * 设置原型链，使用超类的prototype
 * 设置原型链中的constructor 指向于自身
 * 在原型链上添加自身的原型方法
 * @author yanpeng
 */

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


//super prototype
Author.prototype=new Person();

//sub prototype constructor
Author.prototype.constructor=Author;

//sub own prototype
Author.prototype.showBooks=function(){
    return this.books;
}

var at=new Author("Rose Harms",["js patterns"]);
console.log(at.showBooks());
console.log(at.showName());
var p1=new Person("Rose Harms");
console.log(p1.showBooks());


/**
 * @author yanpeng
 */
function extend(subClass,superClass){
    var F=function(){}
    // subClass.call(superClass);
    F.prototype=superClass.prototype;
    subClass.prototype=new F();
    subClass.prototype.constructor=subClass;
    
    subClass.superClass=superClass.prototype;
    // if(superClass.prototype==Object.prototype){
        // superClass.prototype.constructor=superClass.constructor;
    // };    
}

//user it
//superclass
function Person(name){
    this.name=name;
}

Person.prototype.showName=function(){
    return this.name;
}

//subclass

function Author(name,books){
    //super constuctors
    Author.superClass.constructor.call(this,name);
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

extend(Person,Object);
var at1=new Person("Rose Harms");
console.log(at.showName());



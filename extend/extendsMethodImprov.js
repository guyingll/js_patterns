/**
 * @author yanpeng
 */
function extend(subClass,superClass){
    var F=function(){}
    // subClass.call(superClass);
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


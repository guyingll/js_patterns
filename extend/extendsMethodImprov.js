/**
 * 类继承：1.用一个类声明定义对象的结构
 *       2.实例化该类来创建一个新对象
 * 类继承创造的对象都有一套该类的所有实例属性副本，但实例方法只存在一份
 * @author yanpeng
 */
function extend(subClass, superClass) {
    
    /*
     * 1.subClass.prototype=superClass.prototype;
     *  这种方式当subClass的prototype改变时，会导致superClass的prototype也跟着改变;
     * 
     * 2.subClass.prototype=new superClass();
     *  这种方式实例化一个新的基类，执行基类的构造器方法。
     * 
     */
    var F = function() {}
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;

    /* add a property to indicate what the superClass is
     * this way one can call super methods via this.superclass.something
     */
    subClass.superClass = superClass.prototype;
    /*
     *  防止superClass的constructor指向的不是superClass，而是Object。如下形式：
     *   var Person=function(){}
     *   Person.prototype = {
     *       showName : function() {
     *           return this.name;
     *       }
     *   }
     *   console.log(Person.prototype.constructor==Object) //true.   not the Person but the Object
     *   
     * 
     */
    if(superClass.prototype.constructor==Object.prototype.constructor){
        superClass.prototype.constructor=superClass;
    };
}

//user it
//superclass
function Person(name) {
    this.test = "it a test";
    this.name = name;
}

Person.prototype = {
    showName : function() {
        return this.name;
    }
}

Person.prototype.showName=function() {
        return this.name;
    }

//subclass

function Author(name, books) {
    //super constuctors
    Author.superClass.constructor.call(this, name);
    //sub own consturctors
    this.books = books;
}

extend(Author, Person);

Author.prototype.showBooks = function() {
    return this.books;
}

Author.prototype.showName = function() {
    var name=Author.superClass.showName.call(this);
    return name+',Auhtor of '+this.showBooks().join(', ');
}
var p = new Person("Rose Harms");
var at = new Author("Rose Harms", ["js patterns","test"]);
console.log(at.showBooks());
console.log(at.showName());

console.log(at.test);
console.log(p.test);


/**
 * 原型链继承，使用clone方法将父类绑定到prototype上，利用原型链的查找机制来实现继承，
 * 原型链的查找是 先查找自身对象this  然后查找prototype对象  依次向上查找；
 * @author yanpeng
 */

function clone(object){
    var F=function(){}
    F.prototype=object;
    return new F();
}

var Person={
    name:"default name",
    getName:function(){
        return this.name;
    }
};

var Author =clone(Person);
console.log(Author.getName());
console.log(Author);
Author.books=[];
Author.getBooks=function(){
    return this.books;
}

//对继承而来的成员的读和写的不对等性
var author1=clone(Author);
var author2=clone(Author);
console.log(Author.getBooks());
console.log(author1.getBooks());
console.log(author2.getBooks());
author1.books.push("A");
//push change all Author books
console.log(author1.getBooks());
console.log(Author.getBooks());
console.log(author2.getBooks());

//1、可以使用hasOwnProperty来区分是自身属性还是继承而来的属性（表现为prototype中的属性）
if(author2.hasOwnProperty("books")){//自身属性存在books时，直接加入B
  author2.books.push("B");  
}else{
  author2.books=[]; //自身属性没有books，先添加自身属性books初始值, 然后将B加入
  author2.books.push("B");  
}

console.log(Author.getBooks());//['A']
console.log(author2.getBooks()); //['B']

//2、在1中books的初始值为[],但有些时候属性初始值是一个对象 ，这时就不怎么好操作了，我们来看看下面的对象
Author.address={"country":"china","city":"上海"};
//default address country is china；按照1中操作如下：
var author3=clone(Author);
author3.address={};
author3.address={"country":"china","city":"上海"};
//这样author3 必须知道default值
//更好的方法是建立一个工厂方法来提供default值
//如下：
Author.createAddress=function(){
    //address对象工厂 ，保证每个实例所拥有的address都是唯一的
    return {"country":"china","city":"上海"}
}
Author.address=Author.createAddress();
var author4=clone(Author);
author4.createAddress();
author4.address.city="北京";


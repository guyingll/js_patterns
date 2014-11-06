/*
 * encapsulation
 *
 * author yanpeng
 */

/*
 * 常量（不能修改的变量只有取值器，js中一般为私有静态变量）
 * 优点：
 * 设置为私有属性
 * 在类的构造方法上添加公开的静态取值方法
 * 缺点：
 * 无法多个一起添加，每次添加一个都要添加一次静态方法；
 */

var Book = (function() {
    //private static attribute
    var MAX_BOOKS = 50;
    var STILL_YEARS=5;
    //constuctor
    var ctor=function(constructorArgument) {
        
    }
    //Privileged method
    ctor.getMaxNum=function(){
        return MAX_BOOKS
    }

    ctor.getMaxYear=function(){
        return STILL_YEARS
    }
    //return the constuctor;
    return  ctor
    
})();



var book1 = new Book('987-7-115-19128-1');
var book2 = new Book('978-7-115-28381-2');
console.log(Book.getMaxNum());


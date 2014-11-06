/*
 * encapsulation
 *
 * author yanpeng
 */

/*
 * 静态变量实在类层次上进行操作，而不是实例
 * 闭包实现私有
 * 优点：
 * 拥有私有方法及属性  (外部不可直接访问)
 * 拥有privilege方法（特权方法，可防问私有属性、方法，提供给外部使用）
 * 缺点：
 * 每一个对象实例都将为私有方法及特权方法产生一个新的副本
 * 不利于派生子类，子类也无法访问到超类的任何私有属性及方法 ---- 闭包实现私有成员导致派生问题（继承破坏封装）
 */

var Book = (function() {
    //private static attribute
    var numOfBooks = 0;

    function checkIsbn(isbn) {
        if (isbn == undefined || typeof isbn != "string") {
            return false;
        }
        isbn = isbn.replace(/-/g, "");
        if (isbn.length !== 10 && isbn.length !== 13) {
            return false;
        }
        var sum = 0;
        if (isbn.length === 10) {//10 digit check
            if (!isbn.match(/^\d{9}/)) {
                return false;
            }
            for (var i = 0; i < isbn.length - 1; i++) {
                sum += isbn.charAt(i) * (10 - i);
            }
            var checksum = sum % 11;
            if (checksum != isbn.charAt(9)) {
                return false;
            }
        } else {//13 digit check
            if (!isbn.match(/^\d{12}/)) {
                return false;
            }

            for (var i = 0; i < isbn.length - 1; i++) {
                sum += isbn.charAt(i) * ((i % 2 === 0) ? 1 : 3);
            }
            var checksum = sum % 10;
            if (checksum != isbn.charAt(12)) {
                return false;
            }
        }
        return true;
    }

    //return the constuctor;
    return function(isbn, title, author) {
        //private
        var _isbn, _title, _author;

        //Privileged methods
        this.setIsbn = function(isbn) {
            if (!checkIsbn(isbn)) {
                throw new Error("Book: Invalid ISBN");
            }
            _isbn = isbn;
        };

        this.getIsbn = function() {
            return _isbn;
        };

        this.setTitle = function(title) {
            _title = title || "No title specified";
        };

        this.getTitle = function() {
            return _title;
        };

        this.setAuthor = function(author) {
            _author = author || "No author specified";
        };

        this.getAuthor = function() {
            return _author;
        };

        if(Book.num==undefined){
            Book.num=1;
        }else{
            Book.num++;
        }
        console.log(Book.num);
        numOfBooks++;
        if (numOfBooks > 3) {
            throw new Error("Book:Only 50 instance of Book can be create!")
        }
        //Consturctor code;
        this.setIsbn(isbn);
        this.setTitle(title);
        this.setAuthor(author);
    }
})();

Book.prototype = {
    display : function() {
        return this.isbn + this.title + this.author;
    }
}

//public static attribute
Book.converToTitleCase=function(){
    console.log(Book.num)
}


var book1 = new Book('987-7-115-19128-1');
var book2 = new Book('978-7-115-28381-2');
Book.converToTitleCase();

/*
 * that how new works
 */
var a = new Object();
a.__proto__ = Book.prototype;
a.constructor = Book;
Book.call(a, "987-7-115-19128-1");
console.log(a)
console.log(a.constructor)

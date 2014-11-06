/*
 * encapsulation
 * 
 * author yanpeng
 */

/*
 * 门户大开型（所有属性及方法都对外开放）
 */


var Book=function(isbn,title,author){
    if(isbn==undefined){
        throw new Error("Book constructor requires an isbn;")
    }
    this.isbn=isbn;
    this.title=title||"No title specified";
    this.author=author||"No author specified";
}

Book.prototype.display=function(){
    return this.isbn+this.title+this.author;
}

var theHobbit=new Book('0-395-07122-4','The hobbit','J.R.R.Tolkien');
theHobbit.display();

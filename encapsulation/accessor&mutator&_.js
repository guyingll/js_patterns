/*
 * encapsulation
 * 
 * author yanpeng
 */

/*
 * 门户大开型（所有属性及方法都对外开放） 易于使用 但对数据没有保护作用
 * 使用"_"来表示属性或方法为私有，可以防止无意中使用，但是不能防止故意的使用
 */


var Book=function(isbn,title,author){
    this.setIsbn(isbn);
    this.setTitle(title);
    this.setAuthor(author);
}

Book.prototype={
    
    _checkIsbn:function(isbn){
        if(isbn==undefined||typeof isbn!="string"){
            return false;
        }
        isbn=isbn.replace(/-/g,"");
        if(isbn.length!==10&&isbn.length!==13){
            return false;
        }
        var sum=0;
        if(isbn.length===10){//10 digit check
            if(!isbn.match(/^\d{9}/)){
                return false;
            }
            for(var i=0;i<isbn.length-1;i++){
                sum+=isbn.charAt(i)*(10-i);
            }
            var checksum=sum%11;
            if(checksum!=isbn.charAt(9)){
                return false;
            }
        }else{//13 digit check
            if(!isbn.match(/^\d{12}/)){
                 return false;
            }
            
            for(var i=0;i<isbn.length-1;i++){
                sum+=isbn.charAt(i)*((i%2===0)?1:3);
            }
            var checksum=sum%10;
            if(checksum!=isbn.charAt(12)){
                return false;
            }
        }
        return true;
    },
    
    display:function(){
        return this.isbn+this.title+this.author;
    },
    
    setIsbn:function(isbn){
        if(!this._checkIsbn(isbn)){
            throw new Error("Book: Invalid ISBN");
        }
        this._isbn=isbn;
    },
    
    getIsbn:function(){
        return this._isbn;
    },
    
    setTitle:function(title){
        this._title=title||"No title specified";
    },
    
    getTitle:function(){
        return this._title;
    },
    
    setAuthor:function(author){
        this._author=author||"No author specified";
    },
    
    getAuthor:function(){
        return this._author;
    }
}

console.log(new Book('987-7-115-19128-1'));

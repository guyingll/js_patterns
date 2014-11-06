/*
 * encapsulation
 * 
 * author yanpeng
 */

/*
 * 门户大开型（所有属性及方法都对外开放）
 */


var Book=function(isbn,title,author){
    if(!this.checkIsbn(isbn)){
        throw new Error("Book: Invalid ISBN");
    }
    this.isbn=isbn;
    this.title=title||"No title specified";
    this.author=author||"No author specified";
}

Book.prototype={
    checkIsbn:function(isbn){
        if(isbn==undefined||typeof isbn!="string"){
            return false;
        }
        isbn=isbn.replace("-","");
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
    }
}

var theHobbit=new Book('0-395-07122-4','The hobbit','J.R.R.Tolkien');
theHobbit.display();

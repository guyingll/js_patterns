/**
 * 使用"_"来标示为私有属性或方法
 * @author yanpeng
 */
var GiantCorp={
    
}

GiantCorp.DateParse={
    _stripwhitespace:function(str){
        return str.replace(/\s/,'');
    },
    
    _stringSplit:function(str,delimiter){
        return str.split(delimiter);
    },
    
    stringToArray:function(str,delimiter,stripWS){
        if(stripWS){
            str=this._stripwhitespace(str);
        }
        var outputArray=this._stringSplit(str,delimiter);
        return outputArray;
    }
    
};

console.log(GiantCorp.DateParse.stringToArray("test,1,2,3",",",true));

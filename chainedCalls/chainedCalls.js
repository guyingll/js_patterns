/**
 * 选取一个锚点，然后调用后返回本身。
 * jquery选取的锚点就是html元素，然后将操作挂上去，
 * 每次操作后都返回本身（这个html元素）
 *   @author yanpeng
 */
//除了获得获得的html对象外，为了给这个对象添加方法，我们需要对其prototype添加方法

/*
* 一个库中所拥有的基本特性
*  1.事件
*  2.dom
*  3.Ajax
*/

//扩充函数
Function.prototype.method = function(name, fn) {
    this.prototype[name] = fn;
    return this;
};

(function() {
    function _$(els) {
        this.elements = [];
        for (var i = 0, len = els.length; i < len; i++) {
            var element = els[i];
            if ( typeof element === 'string') {
                element = document.getElementById(element);
            }
            this.elements.push(element);
        }
    }


    _$.prototype = {
        each : function(fn) {
            for (var i = 0, len = this.elements.length; i < len; i++) {
                fn.call(this, this.elements[i]);
            }
            return this;
        },
        show : function() {
            var that = this;
            that.setStyle("display", "none");
            return this;
        }
    }

    /*
     * event
     * 1.addEvent
     * 2.getEvent
     */
    _$.method("addEvent", function(type, fn) {
        var add = function(el) {
            if (window.addEventListener) {
                el.addEventListener(type, fn, false);
            } else if (window.attachEvent) {
                el.attachEvent('on' + type, fn);
            }
        }
        this.each(function(el) {
            add(el);
        });
        return this;
    }).method("getEvent", function(e) {

    }).
    /*
     * dom
     * 1.addClass
     * 2.removeClass
     * 3.replaceClass
     * 4.hasClass
     * 5.getStyle
     * 6.setStyle
     */
    method("addClass", function(className) {

    }).method("removeClass", function(className) {

    }).method("replaceClass", function(oldClass, newClass) {

    }).method("hasClass", function(className) {

    }).method("getStyle", function(prop) {
        var result=[];
        this.each(function(el) {
           result.push(el.style[prop]) ;
        });
        return result;
    }).method("setStyle", function(prop, val) {
        this.each(function(el) {
            el.style[prop] = val;
        })
        return this;
    }).
    /*
     * ajax
     *  1.load,fetches an html fragment from a url and insert it into an element
     */
    method("load", function(uri, method) {

    })
    
/*
    window.$ = function() {
        return new _$(arguments);
    };*/
    //为了防止库冲突，可以让用户自己去命名当前库名称以及作用范围
    window.installHelper=function(scope,interface){
        scope[interface]=function(){
            return new _$(arguments);
        };
    };
})();


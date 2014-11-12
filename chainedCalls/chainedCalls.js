/**
 * @author yanpeng
 */
//除了获得获得的html对象外，为了给这个对象添加方法，我们需要对其prototype添加方法

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

        setStyle : function(prop, val) {
            this.each(function(el) {
                el.style[prop] = val;
            })
            return this;
        },

        show : function() {
            var that = this;
            that.setStyle("display", "none");
            return this;
        }
    }

    window.$ = function() {
        return new _$(arguments);
    };
})();


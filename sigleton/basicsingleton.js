/**
 * 单体模式的好处：
 *  1.对代码的组织作用，命名空间
 *  2.懒加载，只有需要的时候才会进行创建，减少内存消耗
 *  3.分支技术，创建出适合当前环境的方法，这个方法会在加载时完成加载工作，不会每次都去检查运行环境
 * 单体模式的缺点：
 *  1.单体模式是一种单点访问，可能导致模块间的强耦合，不利于单元测试
 * @author yanpeng
 */
var Singleton={
    attribute1: true,
    attribute2: 10,
    
    method1:function(){
        
    },
    
    method2:function(arg){
        console.log(arg)
    }
}
Singleton.attribute1=false;
Singleton.method2("test");

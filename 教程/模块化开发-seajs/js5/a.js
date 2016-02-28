/**
 * Created by zmouse on 2015/5/9.
 */

define(function (require, exports, module) {

    //require() :  通过这个方法，可以在一个模块的内部去加载另外一个模块

    var a = 100;

    exports.a = a;

    //想去使用b模块中的数据
    var b = require('./b');  //同步，当模块的数据加载完成以后才继续执行下面的代码，该方法会返回被加载模块的exports对象
    console.log(b.b);

});
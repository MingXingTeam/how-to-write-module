/**
 * Created by zmouse on 2015/5/9.
 */

/**
 * 其实这三个参数都是seajs为我们定义好的，我们可以去使用他们达到一些目的，注意在使用的时候有些细节的问题是需要特别小心的
 *
 * exports == module.exports
 *
 * require : 方法，用来在一个模块中去加载另外的模块的方法
 */

define(function (require, exports, module) {

    var a = 100;

    //exports.x = 100;

    //exports = a;    //这个需要注意

    var b = 200;

    //正确是做法：
    //exports.a = a;
    //exports.b = b;

    //错误的做法：
    /*exports = {
        a : a,
        b : b
    }*/

    //console.log(exports == module.exports);

    module.exports = {
        a : a,
        b : b
    }

});
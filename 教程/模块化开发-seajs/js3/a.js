/**
 * Created by zmouse on 2015/5/9.
 */

//这样的写法并没有解决命名冲突的问题的
//var a = 100;

/**
 *
 * 被加载的文件需要使用模块化的格式去编写
 *
 * 我们需要通过seajs提供的一个全局的define方法来实现模块
 *
 * define(function)
 *
 * define(id, function)
 *  第一个参数：当前模块的唯一标识符，当前模块的id
 *  第二个参数：模块
 *
 *  function参数可以接受三个参数
 *      1.require
 *      2.exports
 *      3.module
 *
 *      这个三个参数可以省略，但是顺序和名字必须按照他规定的使用
 */

define(function (require, exports, module) {

    var a = 100;

    //exports.x = 100;

    exports.a = a;

});
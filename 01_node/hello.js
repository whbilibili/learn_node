/*
 * @Author: wanghong wanghong52@meituan.com
 * @Date: 2022-08-05 11:57:06
 * @LastEditors: wanghong wanghong52@meituan.com
 * @LastEditTime: 2022-08-05 18:03:51
 * @FilePath: /learn_node/01_node/hello.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


console.log("hello world!")
exports.x = 10;
exports.add = function(a,b){
    return a+b
}
exports.mul = function(a,b){
    return a*b
}


console.log(global)

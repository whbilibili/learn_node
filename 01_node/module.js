/*
 * @Author: wanghong wanghong52@meituan.com
 * @Date: 2022-08-05 11:58:48
 * @LastEditors: wanghong wanghong52@meituan.com
 * @LastEditTime: 2022-08-05 18:03:26
 * @FilePath: /learn_node/01_node/module.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 
 * 
*/
var hello = require("./hello");
var model  = require("./02_module.js");
console.log(hello.x)
var math = require('math')
console.log('add',math.add(12,13))


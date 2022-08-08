/*
 * @Author: wanghong wanghong52@meituan.com
 * @Date: 2022-08-07 16:20:08
 * @LastEditors: wanghong wanghong52@meituan.com
 * @LastEditTime: 2022-08-07 16:40:27
 * @FilePath: /learn_node/01_node/03_node.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//通过node操作系统文件

const fs = require("fs")
// console.log(fs)

var f1 = fs.openSync('hello.txt',"w")
fs.writeSync(f1,"hello ,world!",20)
fs.closeSync(f1)
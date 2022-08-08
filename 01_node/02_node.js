/*
 * @Author: wanghong wanghong52@meituan.com
 * @Date: 2022-08-07 15:43:32
 * @LastEditors: wanghong wanghong52@meituan.com
 * @LastEditTime: 2022-08-07 15:57:16
 * @FilePath: /learn_node/01_node/02_node.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var b = Buffer.alloc(10)
b[0] = 99
b[1] = 52
b[2] = 12
console.log(b[2].toString(2))

for(var i = 0;i<b.length;i++){
    console.log(b[i])
}

console.log(b)
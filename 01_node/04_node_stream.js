/*
 * @Author: wanghong wanghong52@meituan.com
 * @Date: 2022-08-07 17:37:41
 * @LastEditors: wanghong wanghong52@meituan.com
 * @LastEditTime: 2022-08-07 17:52:13
 * @FilePath: /learn_node/01_node/04_node_stream.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs= require("fs")
var s = fs.createWriteStream("hello3.txt");
s.write("test")
s.once("open",function () {console.log("open")  })
s.once("close",function () {console.log("close")  })

s.write("this a good day")
s.write("tt")
s.write("gg")

//关闭流
s.end()

/*
 * @Author: wanghong wanghong52@meituan.com
 * @Date: 2022-08-07 16:43:06
 * @LastEditors: wanghong wanghong52@meituan.com
 * @LastEditTime: 2022-08-07 17:28:02
 * @FilePath: /learn_node/01_node/03_异步文件写入.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs  = require("fs")

fs.open("./hello1.txt","w+",function (err,fd) { 
    if(!err){
        fs.write(fd,"this is yibu counst",function (err) {
            if(!err){
                console.log("write success!")
            }
          })
          fs.close(fd,function(err){
            if(!err){
                console.log("closed successful!")
            }
          })
    }
 })


fs.writeFile("./01_node/hello2.txt",'\nthis is write test',{flag:'a+'},function(err){console.log(err)})


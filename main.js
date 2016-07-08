/*var fs = require("fs");
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("--阻塞-----end---------");


var abc = require("fs")
abc.readFile('input.txt', function (err, data) {
    if(err) return console.error(err);
    console.log(data.toString());
});
console.log("--------非阻塞------end----");*/
/*

var event = require('events');

var eventEmitter  = new event.EventEmitter();

var connectHandler = function connected() {
    console.log("--------连接成功---------");
    debugger
    eventEmitter.emit('step2');
};

eventEmitter.on('step1', connectHandler);


eventEmitter.on('step2', function () {
    debugger
    console.log("----------收到数据----------");
});

eventEmitter.emit('step1');

console.log("---------end--------------");*/
//event.js 文件
//console.log(new Date().getTime());
/*
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
var begin = new Date().getTime();
event.on('some_event', function() {
    console.log('some_event 事件触发');
    console.log(new Date().getTime()-begin);
});
    setTimeout(function() {
        event.emit('some_event');
    }, 1000);
*/
/*

buf = new Buffer(256);
console.log(buf);
len = buf.write("www.runoob.com");
console.log(buf);
console.log("写入字节数 : "+  len);
console.log("output   " + buf.toString('ascii'));
console.log(" -- json--- " + buf.toString('ascii').toJSON);

var buffer1 = new Buffer('菜鸟教程 ');
var buffer2 = new Buffer('www.runoob.com');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());


var a = new Buffer(256);
var b = new Buffer(256);
var c = new Buffer(256);
var d = new Buffer(256);
a.write("ab");
b.write("1ab");
c.write("ab");
d.write("abc");
console.log("-----" +a.compare(b));
console.log("-----" +a.compare(c));
console.log("-----" +a.compare(d));
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
    console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
    console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
    console.log(buffer1 + " 在 " + buffer2 + "之后");
}*/

/*

process.on('exit', function(code) {

    // 以下代码永远不会执行
    setTimeout(function() {
        console.log("该代码不会执行");
    }, 0);

    console.log('退出码为:', code);
});
console.dir(process.version);
console.log("程序执行结束");*/
/*

var fs = require("fs");

console.log("准备删除目录 /temp/test");
fs.rmdir("/temp/test",function(err){
    if (err) {
        return console.error(err);
    }
    console.log("读取 /temp 目录");
    fs.readdir("/temp/",function(err, files){
        if (err) {
            return console.error(err);
        }
        files.forEach( function (file){
            console.log( file );
        });
    });
});*/



var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);
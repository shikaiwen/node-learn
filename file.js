
//邮件发送以及定时器http://www.gimoo.net/t/1502/54ed8f15d95ac.html
/*
var fs = require('fs');
var data = fs.readFile("D:/t.txt","gbk",function(err,datas){

    if(err) {
        console.log('error :' + err);
    }else{
        console.log(datas);
    }
});

*/
var iconv = require('iconv-lite');
var fs = require('fs');


/*var fileStr = fs.readFileSync('D:/t.txt',{encoding:'binary'});
var buf = new Buffer(fileStr,'binary');
var str = iconv.decode(buf,'GBK');
console.log(str);*/


var lineReader = require('line-reader');
lineReader.eachLine('D:/t.txt',{encoding:'binary'},function(line,last){
    // console.log(line);
    var buf = new Buffer(line,'binary');
    var str = iconv.decode(buf,'GBK');
    console.log(str);

});


fs.stat('D:/t.txt',function(err,stats){
    console.log('stats:' + JSON.stringify(stats));
});


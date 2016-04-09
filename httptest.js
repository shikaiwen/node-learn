
var http = require('http');


http.get('http://www.csdn.net/' , function(res) {
    console.log('Got response: '+ res.statusCode +'');
}).on('error',function(e) {

})  ;

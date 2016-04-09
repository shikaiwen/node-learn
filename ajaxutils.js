


var jsdom = require('jsdom');



jsdom.env({
    url:'http://www.csdn.net/',
    scripts: ["http://code.jquery.com/jquery.js"],
    done:function(err,window){
        var $ = window.$;
        var obj = $(".news_list li").eq(1).find("a").text();
        console.log(obj);
        console.log("over");
    }

});
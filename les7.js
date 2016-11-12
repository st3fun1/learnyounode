var http = require("http");
var url = process.argv[2];
http.get(url,function(response){
    var c = response.setEncoding("utf8");
    c.on("data",function(data){
        console.log(data);
    });
});
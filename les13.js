var http = require("http");
var url = require("url");
var server = http.createServer(function(req,res){
    var response, d, hour, minute, second;
    if(req.method !== "GET"){
        return res.end("GET query string required!\n");
    }
    var parsedReqURL = url.parse(req.url,true);
    var queryObj = parsedReqURL.query;
    if(parsedReqURL.pathname == "/api/parsetime"){
         d  = new Date(queryObj.iso);
         hour = d.getHours();
         minute = d.getMinutes();
         second = d.getSeconds();
         response = {"hour":hour,"minute":minute,"second":second};
    } 
    if(parsedReqURL.pathname == "/api/unixtime"){
        d = new Date(queryObj.iso);
        response = {"unixtime":d.getTime()};
    }
    res.writeHead(200, {"Content-Type":"application/json"});
    res.write(JSON.stringify(response));
    res.end();
});

server.listen(process.argv[2]);
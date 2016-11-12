var http = require("http");
var concat= require("concat-stream");
var url = process.argv[2];
http.get(url, function(response){
    var dataF;
    response.on("error",function(err){
        console.log(err);
        process.exit(1);
    });
    
    response.pipe(concat(function(data){
        dataF = data.toString();
    }));
    response.on("end",function(){
        var len = dataF.length;
        console.log(len);
        console.log(dataF);
    });
});

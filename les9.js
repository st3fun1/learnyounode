var http = require("http");
function getData(url){
    var str = "";
    http.get(url,function(response){
        response.on("error",function(err){
            console.log(err);
        });
        response.on("data",function(data){
            str += data.toString();
        });
        response.on("end",function(){
            console.log(str);
        });
    });
}
getData(process.argv[2]);
getData(process.argv[3]);
getData(process.argv[4]);

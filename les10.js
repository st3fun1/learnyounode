var net = require("net");
function getTimeAndDate(){
    var date = new Date();
    var year = date.getFullYear();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var hours = date.getHours();
    var mins = date.getMinutes();
    if(hours < 10){
        hours = "0" + hours;
    }
    return year + "-" + month + "-" + day + " " + hours + ":" + mins +"\n";
}
function writeTimeOfCon(port){
    var server = net.createServer(function(socket){
        var data = getTimeAndDate();
        socket.write(data);
    });
    server.listen(port);
}

writeTimeOfCon(process.argv[2]);
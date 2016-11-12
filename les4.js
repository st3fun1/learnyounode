var fs = require('fs');
//var lines;
function printLines(callback){
  fs.readFile(process.argv[2],'utf-8',function doneReading(err,data){
 	var lines = data.split('\n').length-1;
  //      console.log(lines);
        callback(lines);
 });
}
function consoleVal(len){
	console.log(len);
}
printLines(consoleVal);

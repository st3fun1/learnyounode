var dir = process.argv[2];
var ext = process.argv[3];
var printFilteredFiles = require('./les6.1.js');
function printData(error,data){
    if(data == null){
        console.log(error);
    } else {
        for(var i=0;i<data.length;i++){
            console.log(data[i]);
        }
    }
}
printFilteredFiles(dir,ext,printData);

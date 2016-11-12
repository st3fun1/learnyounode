var fs = require('fs');
var file = fs.readFileSync(process.argv[2]);
var count;
count = file.toString().split("\n").length;
console.log(count-1);

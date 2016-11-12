var fs = require('fs');
var pa = require("path");
function printFilteredFiles(dir,ext,callback){
	fs.readdir(dir,function(err,data){
		if(err) return callback(err);
		var filteredData =  data.filter(function(file){
			return pa.extname(file) == '.'+ext;
		});
		return callback(null,filteredData);
	});
}
module.exports = printFilteredFiles;
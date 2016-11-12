
var fs = require('fs');
var filterContext = "." + process.argv[3];
fs.readdir(process.argv[2],function(err,list){
	var filteredList = list.filter(function(v,i,a){
		return v.indexOf(filterContext) > -1
	});
        filteredList.forEach(function(v,i){
        console.log(v);
        });
});

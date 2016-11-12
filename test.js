//testing callbacks
var b = 2;
function d(f){
console.log(f)
}
function a(d){
var b = 3;
return function test(d){
 console.log(b)
  d(b);
}
}
a()(d);

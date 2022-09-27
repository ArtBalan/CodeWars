// https://www.codewars.com/kata/56d9439813f38853b40000e4

Boolean.prototype.toString = Number.prototype.toString = function (){
  return this + ""
}

String.prototype.toString = function(){
  return "'" + this + "'"
}

Array.prototype.toString = function(){
  let tempStr = "[";
  this.forEach(e => tempStr += e.toString() + ",");
  if(tempStr.length != 1 ) tempStr = tempStr.slice(0,-1)
  return tempStr + "]";
}
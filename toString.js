Boolean.prototype.toString = Number.prototype.toString = Array.prototype.toString = function (){
  return this + ''
}

Array.prototype.toString = function(){
  let tempStr = '[';
  this.forEach(e => tempStr += e.toString() + ',');
  if(tempStr.length != 1 ) tempStr = tempStr.slice(0,-1)
  return tempStr + ']';
}
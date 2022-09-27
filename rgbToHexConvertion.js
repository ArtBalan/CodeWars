//https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

function rgb(r, g, b){
  return (((r<0)? '00' : (r.toString(16).length==1)? '0' + r.toString(16) : (r.toString(16).length>2)?'FF' : r.toString(16)) + 
  ((g<0)? '00' : (g.toString(16).length==1)? '0' + g.toString(16) : (g.toString(16).length>2)?'FF' : g.toString(16)) + 
  ((b<0)? '00' : (b.toString(16).length==1)? '0' + b.toString(16) : (b.toString(16).length>2)?'FF' : b.toString(16)) ).toUpperCase();



}
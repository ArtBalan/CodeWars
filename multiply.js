function add1(a){ return a + 1 };
function sub1(a){ return a - 1 }

function addN(a,n){
  temp = a;
  for(let i=0; i<n; i++) temp = add1(temp)
  return temp;
}

function multiply(a, b){
  let temp = 0;
  while (b!=0){ 
    temp = addN(temp,a);
    b = sub1(b);
  }
  return temp;
}
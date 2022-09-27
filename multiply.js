let add1 = a => a + 1;
let sub1 = a => a - 1;
let giveMeZero = () => 0;

function addN(a,n){
  temp = a;
  for(let i = giveMeZero(); i<n; i = add1(i)) temp = add1(temp)
  return temp;
}

let toStr = a => a + '';

function multiply(a, b){
  // Juste for optimisation sake
  if(a == giveMeZero()) return 0;
  if(b == giveMeZero()) return 0;
  if(toStr(a)[0] == '-') return "can't process negative number";
  if(toStr(b)[0] == '-') return "can't process negative numbre";
  let temp = giveMeZero();
  while (b!=giveMeZero()){ 
    temp = addN(temp,a);
    b = sub1(b);
  }
  return temp;
}

console.log(multiply(2,5));
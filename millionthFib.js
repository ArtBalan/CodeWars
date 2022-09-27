function fib(n) {
  if(n == 0) return 0n;
  let f = [0n, 1n];
  let mult = (n<0)? (-1) : (1);
  n *= mult;
  mult = (mult == -1 && n%2 == 1)? 1 : mult;
  
  let nBin = n.toString(2);

  for(let i=0; i<nBin.length; i++){
    let bit = nBin[i];
  
    let f2n1 = f[1]**2n + f[0]**2n;
    let f2n = f[0] * (2n * f[1] - f[0]);
  
    if (bit == '0'){
      f[0] = f2n;
      f[1] = f2n1;
    } else {
      f[0] = f2n1;
      f[1] = f2n1 + f2n;
    }
  
  }
  return (f[0] * BigInt(mult))
}

console.log('got : ' + fib(0) + ' | expected : 0 for fib of 0');
console.log('got : ' + fib(1) + ' | expected : 1 for fib of 1');
console.log('got : ' + fib(2) + ' | expected : 1 for fib of 2');
console.log('got : ' + fib(3) + ' | expected : 2 for fib of 3');
console.log('got : ' + fib(3) + ' | expected : 3 for fib of 4');
console.log('got : ' + fib(5) + ' | expected : 5 for fib of 5');
console.log('got : ' + fib(-6) + ' | expected : -8 for fib -6');


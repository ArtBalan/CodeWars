//https://www.codewars.com/kata/5518a860a73e708c0a000027/train/javascript

function lastDigit(as){
  if(as.length == 0) return 1;
  let temp = as[as.length-1];

  for(let i=as.length-2; i>=0; i--){
    temp = (as[i] ** temp)%100;
  }
  return temp
}
console.log(lastDigit([3,4,5]))


/*


7, 6, 21
4 ** 5 mod 10 = 4

3 ** 4 mod 10 = 81



*/
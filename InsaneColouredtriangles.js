//https://www.codewars.com/kata/5a331ea7ee1aae8f24000175

/*
function triangle(row) {
  let arr = row.split('');
  while(arr.length != 1){
    let temp = [];
    for(let i=0; i<arr.length-1; i++){
      let bind = [] 
      bind.push(arr[i], arr[i+1]);
      if(bind[0] == bind[1]) temp.push(bind[0]);
      bind = bind.join('');
      if(bind == 'GB' || bind == 'BG') temp.push('R');
      if(bind == 'GR' || bind == 'RG') temp.push('B');
      if(bind == 'RB' || bind == 'BR') temp.push('G');
    }
    arr = temp;
  }
  return arr[0];
}
*/

function binom_max_2( n,  k){
  if (n < k)
  return 0;
  switch (n){
    case 0:
      return 1;
      break;
    case 1:
      return 1;
      break;
    case 2:
      return 1 + (k == 1);
      break;
    default:
      return 0;
      break;
  }
}

function triangle(row){
  // r = 0
  // g = 1
  // b = 2
  row = row.split('');
  let arr = [];
  row.forEach(e => {
    if (e == 'R') arr.push(0);
    if (e == 'G') arr.push(1);
    if (e == 'B') arr.push(2);
  });
  let n = row.length;
  let x = 0;

  for(let k=0; k<n; k++){
    x += binom_max_2(n%3,k%3)*arr[k];
    x = x%3
  }  

  x *= ((-1)**(n));

  console.log(x%3)


  if(x == 0%3) return 'R';
  if(x == -1%3) return 'G';
  if(x == -2%3) return 'B';

}



console.log(triangle('RRGBRGBB') == 'G');

console.log(triangle('B') ==  'B');
console.log(triangle('GB') ==  'R');
console.log(triangle('RRR') ==  'R');
console.log(triangle('RGBG') ==  'B');
console.log(triangle('RBRGBRB') ==  'G');
console.log(triangle('RBGGBGGRBRBBBGGRRBRBGRGGGRGRBGBBBBBBRRBGBRRRBGGBRGGRGRGGRRRGRRBGGGRRRBRRRRRRGBRBRGRBBGRGBGBGBBRGRBGRBBRRBGRRBGRGGRRRBGRRRRGRGRBBRRBGBRGRGBBGBGRGRGBRRRRRGGGBRBGRGBRRGRRGGRBGGGGBRBRRGRGGRRGRRGGBRBRBGRGRBBBRBRBBBRBGGGGGGBGRGBBBGBGBRGBGBRBRRGGRBRGRBBBBBGGRRRGRBRRBBRBBBGGRBRRBRGBRGRGBGRBGGRGBBBGRGGGGRRBBBRRGGRBBGGRBBBRGGBGBBBBGBGRGBBGBBGBRRBBBBRRBRBRGGBGGBGBGBGBGBGRRGBRRGGBRRBGGGRRGRGRRBGBBGBBGGRBGRGRBRGRRGBBGGGGBGRBGGBGGRGRBRRBBRRRGGBBBBBGGGRRGGGBRRRBBGGGBGGGBRRBBBRGBBBGBRGGGGRRBBBGRBRBRBGGBGGRGBGBGGGGRBRRRRBBBBGRGBRRBGGBGRBGRRGRRBRGGBRGBRRRRGBRBGBRBBRRGGBGRBGRGBGGRGRRRBGBGBGBRGBRGRGGRRRGRRRGGBGBRGGGGRRRRBBGRRRRBRBBRBRBBRRBGRBGRRRGGGBBRGGBGBBGGRRBBRGBGGGGRGRBBRBBGBBGRGGRRGGBRBGRRGRBBBBGGRGBGGBBGBGRGRBBBBBGRBRGBBRBBGGRGRGRGRGBGRGBRBGBBBBGBGRBRRBRGGBRGRBRRGBBGGRGRBBRBRBRRBRGRGBGGBGGRRBBRBBRGGGBBBRRRGB') ==  'B');
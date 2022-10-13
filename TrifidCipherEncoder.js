// https://www.codewars.com/kata/5dcf96055ca66e0032b9b958

function getLetterCode(letter,key){
  let id = key.indexOf(letter);
  if(id==-1) return false;
  let a = Math.floor(key.indexOf(letter)/9)+1 + '';
  let b = Math.floor((key.indexOf(letter)-(a-1)*9)/3)+1 + '';
  let c = (key.indexOf(letter)-(a-1)*9)%3+1 + '';
  return a+b+c;
}

function trifidEncode(key, period, data){
  // encode letters
  let encodedLetter = [];
  data.split('').forEach(e => encodedLetter.push(getLetterCode(e,key)));

  // create letter block
  let blockedOutEncodedLetter = [];
  for(let i=0; i<encodedLetter.length; i++){
    let j = Math.floor(i/period);
    console.log(j + ' : ' + blockedOutEncodedLetter.length )
    if(i%period==0) blockedOutEncodedLetter.push([]);
    blockedOutEncodedLetter[j].push(encodedLetter[i]);
  }

  let str='';
  blockedOutEncodedLetter.forEach(e=>{
    let tempStr = e.join('');
    for(let i=0; i<3*period;i++){
      str += tempStr[(i*3)%(3*period-1)]
    }
  })
  console.log(str)



}

let key="EPSDUCVWYM+ZLKXNBTFGORIJHAQ";
let data = "DEFENDTHEEASTWALLOFTHECASTLE+";
let expected = "SUEFECPHSEGYYJIXIMFOFOCEJLBSP";
console.log(trifidEncode(key, 5, data) ==  expected);
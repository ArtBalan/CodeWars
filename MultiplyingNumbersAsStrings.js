// https://www.codewars.com/kata/55911ef14065454c75000062/train/javascript

function multiply(a, b){

  if(a == "0" || b == "0") return '0'

  let lenA = a.length;
  let lenB = b.length;
  
  if(lenB > lenA){
    let c = b;
    b = a;
    a = c;
    lenA = a.length;
    lenB = b.length;
  };
  
  let arr = []
  for(let i=lenB-1; i>=0; i--){
    let carry = 0;
    let tempStr = ''
    for(let j=lenA-1; j>=0; j--){
      // multiply
      let mult = parseInt(a[j]) * parseInt(b[i]);
      mult += parseInt(carry);
      carry = (Math.floor(mult/10)).toFixed(0);
      tempStr = (mult%10) + tempStr;
    }
    tempStr = carry + tempStr;
    arr.push(tempStr);
  }

  let fixedArr = [];
  let i = 0;
  arr.forEach(e => {
    let temp = '';
    for(let j=0;j<i;j++) temp += '0';
    temp = temp.toString()
    fixedArr.push(e+temp)
    i++;
  });

  let maxLength = 0;
  fixedArr.forEach(e => maxLength = (maxLength>e.length)? maxLength : e.length)

  let fixedArrV2 = [];
  fixedArr.forEach(e => {
    let zeroS = '';
    for(let i=0; i<maxLength-e.length; i++) zeroS+= '0';
    fixedArrV2.push(zeroS+e);
  });

  let tempStr  = '';
  let carry = 0;
  for(let i=fixedArrV2[0].length-1; i>= 0; i--){
    let add = 0;
    fixedArrV2.forEach(e => add += (parseInt(e[i])));
    add += parseInt(carry);
    tempStr = (add%10) + tempStr;
    carry = (Math.floor(add/10)).toFixed(0);
  }
  while(tempStr[0] == 0) tempStr = tempStr.slice(1)

  return tempStr
}

console.log(multiply("2", "3") == "6");
console.log(multiply("30", "69") == "2070");
console.log(multiply("11", "85") == "935");

console.log(multiply("2" ,"0") == "0");
console.log(multiply("0", "30") == "0");
console.log(multiply("0000001", "3") == "3");
console.log(multiply("1009", "03") == "3027");

console.log(multiply("98765", "56894") == "5619135910");
console.log(multiply("1020303004875647366210", "2774537626200857473632627613") == "2830869077153280552556547081187254342445169156730");
console.log(multiply("58608473622772837728372827", "7586374672263726736374") == "444625839871840560024489175424316205566214109298");
console.log(multiply("9007199254740991", "9007199254740991") == "81129638414606663681390495662081");
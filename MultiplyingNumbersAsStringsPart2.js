// https://www.codewars.com/kata/55911ef14065454c75000062/train/javascript

function multiply(a, b){

  // Simple check to prevent useless work
  if(a == "0" || b == "0") return '0';

  // var to know if the result should be negative or positive
  let neg = false;
  if(a[0]=='-') {a = a.slice(1); neg = !neg}
  if(b[0]=='-') {b = b.slice(1); neg = !neg}

  // gen the index of the dot in the string.
  // there is no need to keep it
  let dotAInd = a.indexOf('.');
  let dotBInd = b.indexOf('.');
  // replace the dot by nothing
  a = a.replace('.','')
  b = b.replace('.','')
  
  // get the length of the char numbre
  let lenA = a.length;
  let lenB = b.length;
  
  // calculate the numbre of decimal the final result will have
  let decimalNbr = 0;
  // dotAInd only equal -1 if there was no dot in it, so we skip this step
  if(dotAInd != -1) decimalNbr += (lenA - dotAInd);
  // same here
  if(dotBInd != -1) decimalNbr += (lenB - dotBInd);

  // If lenB > lenA
  // We swap the variable, IDK why i did this. And i am now to lazy to check if my code work without 
  if(lenB > lenA){
    let c = b;
    b = a;
    a = c;
    lenA = a.length;
    lenB = b.length;
  };
  
  // Array for the result
  // Here we do a multiplication as we do on paper, one decimal time the top numbre
  // Each multiplication is store in the array
  let arr = []
  for(let i=lenB-1; i>=0; i--){
    let carry = 0;
    let tempStr = ''
    for(let j=lenA-1; j>=0; j--){
      let mult = parseInt(a[j]) * parseInt(b[i]);
      mult += parseInt(carry);
      carry = (Math.floor(mult/10)).toFixed(0);
      tempStr = (mult%10) + tempStr;
    }
    tempStr = carry + tempStr;
    arr.push(tempStr);
  }

  // We fix the array by multipling each entry by a power of ten.
  // As we would do on a sheet of paper, shifting each result by one space
  let fixedArr = [];
  let i = 0;
  arr.forEach(e => {
    let temp = '';
    for(let j=0;j<i;j++) temp += '0';
    temp = temp.toString()
    fixedArr.push(e+temp)
    i++;
  });

  // get the length of the biggest string in the result array
  let maxLength = 0;
  fixedArr.forEach(e => maxLength = (maxLength>e.length)? maxLength : e.length)

  // Fix a second time the array by adding leading 0 so all the number have the same length
  // We do that to facilitate the addition of all the lines
  let fixedArrV2 = [];
  fixedArr.forEach(e => {
    let zeroS = '';
    for(let i=0; i<maxLength-e.length; i++) zeroS+= '0';
    fixedArrV2.push(zeroS+e);
  });

  // The addition, digit by digit
  let tempStr  = '';
  let carry = 0;
  for(let i=fixedArrV2[0].length-1; i>= 0; i--){
    let add = 0;
    fixedArrV2.forEach(e => add += (parseInt(e[i])));
    add += parseInt(carry);
    tempStr = (add%10) + tempStr;
    carry = (Math.floor(add/10)).toFixed(0);
  }

  // Some shenanigans
  
  // IDK if this line is still usefull, to lazy to check
  if(tempStr.length==0) return '0';

  // If the decimal number is > 0 we add the . at the right place
  if (decimalNbr>0){
    tempStr = tempStr.slice(0,tempStr.length-decimalNbr) + '.' + tempStr.slice(tempStr.length-decimalNbr);
    // We then proced to remove the trailling 0
    while(tempStr[tempStr.length-1] == '0') tempStr = tempStr.slice(0,-1);
  }

  // Remove the leading 0
  while(tempStr[0] == 0 && tempStr[1] != '.') tempStr = tempStr.slice(1);

  // If we have no decimal but a . at the end we remove it
  if(tempStr[tempStr.length-1] == '.') tempStr = tempStr.slice(0,-1);

  // Don't question me
  if( tempStr == '0') return '0'

  // restore the negative signe if needed
  return ((neg)? '-' : '' ) + tempStr;
}


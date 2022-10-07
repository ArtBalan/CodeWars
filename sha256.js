// https://blog.boot.dev/cryptography/how-sha-2-works-step-by-step-sha-256/

function binAdd(a,b){
  if(a.length !== b.length) return false;

  let carry = '0';
  let result = '';
  let temp = '';
  for(let i=a.length-1; i>=0; i--){
    temp = '';
    if(temp == '' && a[i]=='0' && b[i]=='0' && carry=='0') { temp = '0'; carry = '0'}
    if(temp == '' && a[i]=='0' && b[i]=='0' && carry=='1') { temp = '1'; carry = '0'}
    if(temp == '' && a[i]=='0' && b[i]=='1' && carry=='0') { temp = '1'; carry = '0'}
    if(temp == '' && a[i]=='0' && b[i]=='1' && carry=='1') { temp = '0'; carry = '1'}
    if(temp == '' && a[i]=='1' && b[i]=='0' && carry=='0') { temp = '1'; carry = '0'}
    if(temp == '' && a[i]=='1' && b[i]=='0' && carry=='1') { temp = '0'; carry = '1'}
    if(temp == '' && a[i]=='1' && b[i]=='1' && carry=='0') { temp = '0'; carry = '1'}
    if(temp == '' && a[i]=='1' && b[i]=='1' && carry=='1') { temp = '1'; carry = '1'}
    result = temp + result;
  }
  return result;
}

function splitInBlock(str, n){
  let newArr = [[]];
  let counter = 0;
  let arrId = 0;
  for(let i=0; i<str.length; i++){
    if(counter != n){
      newArr[arrId].push(str[i]);
      counter ++;
    } else {
      counter = 1;
      newArr.push([]);
      arrId ++;
      newArr[arrId].push(str[i]);
    }
  }
  return newArr.map(e => e.join(''));
}

function rotateR(str, n){
  let temp = str;
  return temp.slice(str.length-n,str.length) + temp.slice(0,str.length-n);
}

function shiftR(str, n){
  let temp = str;
  temp = temp.slice(0,str.length-n);
  while(temp.length<32) temp = '0' + temp;
  return temp
}

function xorBite(a,b){
  if(a==b) return '0'
  else if (a=='0' && b =='0') return '0'
  else return '1';
}

function xor(a,b){
  if(a.length == b.length){
    let temp = '';
    for(let i=0; i<a.length; i++){
      temp += xorBite(a[i],b[i]);
    }
    return temp;
  } else {
    return 'error';
  }
}

function and(a,b){
  if(a.length==b.length){
    let temp = '';
    for(let i=0; i<a.length;i++) temp += (a[i]==1 && b[i]==1)? '1' : '0';
    return temp;
  }else{
    return false;
  }
}

function not(a){
  let temp = '';
  for(let i=0; i<a.length;i++) temp += (a[i]==1)? '0' : '1';
  return temp;

}


function sha256(str){
  let arr = [];
  // to ascii char
  str.split('').forEach(e => arr.push(e.charCodeAt(0).toString(2)))
  arr = arr.map(e => {
    while(e.length <8) e = '0' + e
    return e
  });

  // add the last 1
  arr = arr.join('') + '1';

  // Add 0 till arr is a multiple of 512 - 64
  while(arr.length % 512 != 448) arr += '0';

  // add the len of the original string
  let len = (str.length*8).toString(2);
  while(len.length<64) len = '0' + len;
  arr += len;

  arr = splitInBlock(arr, 512);
  arr = arr.map(e => splitInBlock(e,32));

  let h0 = '01101010000010011110011001100111';
  let h1 = '10111011011001111010111010000101';
  let h2 = '00111100011011101111001101110010';
  let h3 = '10100101010011111111010100111010';
  let h4 = '01010001000011100101001001111111';
  let h5 = '10011011000001010110100010001100';
  let h6 = '00011111100000111101100110101011';
  let h7 = '01011011111000001100110100011001';

  const k = [
    '01000010100010100010111110011000', '01110001001101110100010010010001', '10110101110000001111101111001111', '11101001101101011101101110100101',
    '00111001010101101100001001011011', '01011001111100010001000111110001', '10010010001111111000001010100100', '10101011000111000101111011010101',
    '11011000000001111010101010011000', '00010010100000110101101100000001', '00100100001100011000010110111110', '01010101000011000111110111000011',
    '01110010101111100101110101110100', '10000000110111101011000111111110', '10011011110111000000011010100111', '11000001100110111111000101110100',
    '11100100100110110110100111000001', '11101111101111100100011110000110', '00001111110000011001110111000110', '00100100000011001010000111001100',
    '00101101111010010010110001101111', '01001010011101001000010010101010', '01011100101100001010100111011100', '01110110111110011000100011011010',
    '10011000001111100101000101010010', '10101000001100011100011001101101', '10110000000000110010011111001000', '10111111010110010111111111000111',
    '11000110111000000000101111110011', '11010101101001111001000101000111', '00000110110010100110001101010001', '00010100001010010010100101100111',
    '00100111101101110000101010000101', '00101110000110110010000100111000', '01001101001011000110110111111100', '01010011001110000000110100010011',
    '01100101000010100111001101010100', '01110110011010100000101010111011', '10000001110000101100100100101110', '10010010011100100010110010000101',
    '10100010101111111110100010100001', '10101000000110100110011001001011', '11000010010010111000101101110000', '11000111011011000101000110100011',
    '11010001100100101110100000011001', '11010110100110010000011000100100', '11110100000011100011010110000101', '00010000011010101010000001110000',
    '00011001101001001100000100010110', '00011110001101110110110000001000', '00100111010010000111011101001100', '00110100101100001011110010110101',
    '00111001000111000000110010110011', '01001110110110001010101001001010', '01011011100111001100101001001111', '01101000001011100110111111110011',
    '01110100100011111000001011101110', '01111000101001010110001101101111', '10000100110010000111100000010100', '10001100110001110000001000001000',
    '10010000101111101111111111111010', '10100100010100000110110011101011', '10111110111110011010001111110111', '11000110011100010111100011110010'
  ];


  arr.forEach(chunk => {

    while(chunk.length < 64) chunk.push('00000000000000000000000000000000');
    for(let i=16; i<64; i++){
      let wIm15 = chunk[i-15];
      let wIm2 = chunk[i-2];
      let wIm16 = chunk[i-16];
      let wIm7 = chunk[i-7];

      let wIm15r7 = rotateR(wIm15,7);
      let wIm15r18 = rotateR(wIm15, 18);
      let wIm15s3 = shiftR(wIm15,3);

      let s0 = xor(xor(wIm15r7,wIm15r18),wIm15s3);


      let wIm2r17 = rotateR(wIm2,17);
      let wIm2r19 = rotateR(wIm2,19);
      let wIm2s10 = shiftR(wIm2,10);

      let s1 = xor(xor(wIm2r17,wIm2r19),wIm2s10);

      let tempWi = binAdd(binAdd(binAdd(wIm16, s0),wIm7),s1)
      chunk[i] = tempWi;
    }

    let a = h0;//'01101010000010011110011001100111';
    let b = h1;//'10111011011001111010111010000101';
    let c = h2;//'00111100011011101111001101110010';
    let d = h3;//'10100101010011111111010100111010';
    let e = h4;//'01010001000011100101001001111111';
    let f = h5;//'10011011000001010110100010001100';
    let g = h6;//'00011111100000111101100110101011';
    let h = h7;//'01011011111000001100110100011001';
  
    // compression loop
    for(let i=0;i<64;i++){
      let s1 = xor(xor(rotateR(e,6),rotateR(e,11)),rotateR(e,25));
      let ch = xor(and(e,f),and(not(e),g));
      let temp1 = binAdd(binAdd(binAdd(binAdd(h,s1),ch),k[i]),chunk[i]);
      let s0 = xor(xor(rotateR(a,2),rotateR(a,13)),rotateR(a,22));
      let maj = xor(xor(and(a,b),and(a,c)),and(b,c));
      let temp2 = binAdd(s0,maj);

      h = g;
      g = f;
      f = e;
      e = binAdd(d,temp1);
      d = c;
      c = b;
      b = a;
      a = binAdd(temp1, temp2);
    }

    h0 = binAdd(h0,a);
    h1 = binAdd(h1,b);
    h2 = binAdd(h2,c);
    h3 = binAdd(h3,d);
    h4 = binAdd(h4,e);
    h5 = binAdd(h5,f);
    h6 = binAdd(h6,g);
    h7 = binAdd(h7,h);

  });// END CHUNK LOOPS

  let value = h0 + h1 + h2 + h3 + h4 + h5 + h6 + h7
  var hex = BigInt('0b'+value).toString(16);
  return hex.toUpperCase()
}

let myWord = 'je ne sais pas ce que jecrit mais cest pour un test'; 
console.log(sha256(myWord))
// https://www.codewars.com/kata/52d1bd3694d26f8d6e0000d3/train/javascript

function VigenèreCipher(key, abc) {
  this.encode = function (str) {
    let keyLen = key.length;
    let strLen = str.length
    let tmpKey = key;
    if (keyLen > strLen) tmpKey = key.substring(0, strLen);
    if (keyLen < strLen){ for(let i=0; i<strLen - keyLen; i++){ tmpKey += key[i%keyLen]; } }
    keyLen = tmpKey.length;
    let tempStr = '';    
    for(let i=0; i<strLen; i++){ tempStr += this.encodeChar(str[i],tmpKey[i]);} 
    return tempStr
  };
  
  this.encodeChar = function(char,key){
    let charIndex = abc.indexOf(char);
    let keyIndex = abc.indexOf(key);
    if(charIndex!=-1 && keyIndex!=-1){
      charIndex+=keyIndex;
      if(charIndex>=abc.length) charIndex -= abc.length
      return abc[charIndex];
    } else return char 
  };

  this.decode = function (str) {
    let keyLen = key.length;
    let strLen = str.length
    let tmpKey = key;
    if (keyLen > strLen) tmpKey = key.substring(0, strLen);
    if (keyLen < strLen){ for(let i=0; i<strLen - keyLen; i++){ tmpKey += key[i%keyLen]; } }
    keyLen = tmpKey.length;
    tempStr = '';    
    for(let i=0; i<strLen; i++) tempStr += this.decodeChar(str[i],tmpKey[i])
    return tempStr
  };

  this.decodeChar = function(char,key){
    let charIndex = abc.indexOf(char);
    let keyIndex = abc.indexOf(key);
    if(charIndex!=-1 && keyIndex!=-1){
      charIndex-=keyIndex;
      if(charIndex<0) charIndex += abc.length
      return abc[charIndex];
    } else return char 
  };
}

var abc, key;
abc = "abcdefghijklmnopqrstuvwxyz";
key = "passwor"
c = new VigenèreCipher(key, abc);



console.log(c.encode('it\'s a shift cipher!') == 'xt\'k o vwixl qzswej!');

// got         xt\'k o hhaxp txpzwn!
// expected    xt\'k o vwixl qzswej!
// here        xt\'k o vwixl qzswej!


// console.log(c.encode('codewars') == 'rovwsoiv');
// console.log(c.decode('rovwsoiv') == 'codewars');

// console.log(c.encode('waffles') == 'laxxhsj');
// console.log(c.decode('laxxhsj') == 'waffles');

// console.log(c.encode('CODEWARS') == 'CODEWARS');
// console.log(c.decode('CODEWARS') == 'CODEWARS');
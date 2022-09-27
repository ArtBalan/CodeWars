function encodeRailFenceCipher(string, numberRails) {
  let rails = [];
  for(let i=0; i<numberRails;i++) rails.push([]);
  let mouvement = 1;
  let railIndex = 0;
  for(let i=0; i<string.length; i++){
    rails[railIndex].push(string[i]);
    railIndex += mouvement;
    if(railIndex>=numberRails){
      mouvement = -1;
      railIndex -= 2;
    }
    if(railIndex<0){
      mouvement = 1;
      railIndex += 2;
    }
  }
  let finalString = [];
  rails.forEach(e => finalString.push(e.join('')));
  return finalString.join('');
}

function decodeRailFenceCipher(string, numberRails) {
  let railsMap = [];
  for(let i=0; i<numberRails;i++) railsMap.push([]);

  let stringLen = string.length;

  string = string.split("");

  let mouvement = 1;
  let railIndex = 0;

  for(let i=0; i<stringLen; i++){

    railsMap.forEach(rail => rail.push('$$'));
    railsMap[railIndex][i] = '%';

    railIndex += mouvement;
    if(railIndex>=numberRails){
      mouvement = -1;
      railIndex -= 2;
    }
    if(railIndex<0){
      mouvement = 1;
      railIndex += 2;
    }
  }

  for(let i=0; i<railsMap.length; i++){
    for(let j=0; j<stringLen; j++){
      if(railsMap[i][j] == '%') railsMap[i][j] = string.shift();
    }
  }

  let tempString = "";

  mouvement = 1;
  railIndex = 0;

  for(let i=0; i<stringLen; i++){
  
    let tempChar = [];
    
    railsMap.forEach(rail => tempChar.push(rail.shift()));
    
    let char = tempChar.filter(letter => letter.length<2)

    tempString += char;
    
    railIndex += mouvement;

    if(railIndex>=numberRails){
      mouvement = -1;
      railIndex -= 2;
    }
    if(railIndex<0){
      mouvement = 1;
      railIndex += 2;
    }
  }

  return tempString
}

let railsnbr = 3;

let toEncode = 'Je suis moi';
let encoded = encodeRailFenceCipher(toEncode, railsnbr);
// console.log(encoded);
let decoded = decodeRailFenceCipher(encoded,railsnbr);
// console.log(decoded)



console.log(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", railsnbr) ==  "WECRLTEERDSOEEFEAOCAIVDEN");
console.log(decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", railsnbr) == "WEAREDISCOVEREDFLEEATONCE");

console.log(decodeRailFenceCipher("talnmduetnurpa mn esimr lae io ik rcu rnvrndsix!i iniim ofsuoeeianaiassif  Vncftuuvdee a aceoosrjirctapsaete t,o tme tmttfrlu! dr n saare eops A! etidx t e  et tssupsei oi g  aqrsieuurs uteuie qaiii ainema ioovit  eiuteDeeP,b iomp irrmecepi .i",11));

let got  = "t re ,atui or roainmanva  etsoiv s tanr lenacmesuirttuoeeidsnisao ppe r usstosimmrxssm eiemieiAtri! dlifjt!  uetqo fi  auei rreiaecDi tlcVn eiintuigieeei d!aciot mfp x  Pp,aa dst inkouartqibi nr  euf ursvtnesei omi  educruoe s eam.p ueatee pundefinedundefinedundefined"
let expected = "tari  etsorv s taan amvncmesuirttuoeearnl nio ppe m usstoadenssssm eieeieiAtrsiimmxijt!  uctqo fif!rd i rreiaeeDi tlc  luaiVtuigiepei d!annee icp x  Pi,aa dsfiitomtartqib  nr  eu  nioutnesei.omi  evfku sd s eamip ueateurrcoe,atui  ior ro eup ea";

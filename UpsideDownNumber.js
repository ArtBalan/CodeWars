function solve(x, y) {
  let count = 0;

  for(let i=x; i<y; i++){
    let tempNbr = i + '';
    let tempArr = [];
    let j = tempNbr.length - 1;
    let error = false;
    while(j >= 0){
      switch(tempNbr[j]){
        case '2':
        case '3': 
        case '4':
        case '5':
        case '7':
          j = -1;
          error = true;
          break;
        case '1':
          tempArr.push(1);
          break;
        case '6':
          tempArr.push(9)
          break;
        case '8':
          tempArr.push(8);
          break;
        case '9':
          tempArr.push(6);
          break;
        case '0':
          tempArr.push(0);
          break;
        default :
          break;
      }
      j --;
    }
    if(!error){
      tempArr = tempArr.join('');
      console.log(tempArr)

      tempArr = parseInt(tempArr);
//       console.log(tempArr, tempNbr);
      if(tempArr == tempNbr) count ++;
    }
  }
  return count;
};

console.log(solve(0,10))
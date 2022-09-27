//https://www.codewars.com/kata/5839c48f0cf94640a20001d3/train/javascript

function landPerimeter(arr){
  let perimeter = 0;
  let tempArr = [];
  arr.forEach(e => { tempArr.push(e.split('')) });
  for(let i=0; i<(tempArr.length? tempArr.length : 0); i++ ){
    for(let j=0; j<(tempArr[i].length? tempArr[i].length : 0); j++ ){
      if(tempArr[i][j] == 'X'){
        if(i == 0 ) perimeter ++;
        if( i == tempArr.length-1) perimeter ++;
        if(j == 0) perimeter ++;
        if(j == tempArr[i].length-1) perimeter ++;
        if( i>0 && tempArr[i-1][j] == 'O') perimeter ++;
        if( i< (tempArr.length - 1) && tempArr[i+1][j] == 'O') perimeter ++;
        if( j>0 && tempArr[i][j-1] == 'O') perimeter ++;
        if( j < (tempArr[i].length - 1) && tempArr[i][j+1] == 'O') perimeter ++;
      }
    }
  }
  return "Total land perimeter: " + perimeter;
}

console.log(landPerimeter(['XOOXO','XOOXO','OOOXO','XXOXO','OXOOO']), "Total land perimeter: 24");
console.log(landPerimeter(["OXOOOX", "OXOXOO", "XXOOOX", "OXXXOO", "OOXOOX", "OXOOOO", "OOXOOX", "OOXOOO", "OXOOOO", "OXOOXX"]), "Total land perimeter: 60");
console.log(landPerimeter(["OXOOO", "OOXXX", "OXXOO", "XOOOO", "XOOOO", "XXXOO", "XOXOO", "OOOXO", "OXOOX", "XOOOO", "OOOXO"]), "Total land perimeter: 52");
console.log(landPerimeter(["XXXXXOOO", "OOXOOOOO", "OOOOOOXO", "XXXOOOXO", "OXOXXOOX"]), "Total land perimeter: 40");
console.log(landPerimeter(["XOOOXOO", "OXOOOOO", "XOXOXOO", "OXOXXOO", "OOOOOXX", "OOOXOXX", "XXXXOXO"]), "Total land perimeter: 54");
console.log(landPerimeter(["OOOOXO", "XOXOOX", "XXOXOX", "XOXOOO", "OOOOOO", "OOOXOO", "OOXXOO"]), "Total land perimeter: 40");
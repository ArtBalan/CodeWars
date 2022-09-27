//https://www.codewars.com/kata/534e01fbbb17187c7e0000c6

function horyFill(x,y,len, spiral){
  for(let i=0; i<len; i++){
    spiral[x][y+i] = 1
  }
  return spiral;
}

function vertFill(x,y,len, spiral){
  for(let i=0; i<len; i++){
    spiral[x+i][y] = 1
  }
  return spiral;
}


function spiralize (n) {
  // spiral init
  let spiral = [];
  for(let i=0; i<n; i++){
    spiral.push([]);
    for(let j=0;j<n; j++){
      spiral[i].push(0);
    }
  }

  let i = n;

  horyFill(0,0,n,spiral);
  let y = n-1;
  let x = 0;
  let downHill = true;

  
  while(i>=2){
    console.log(i)
    if(downHill){
      vertFill(x,y,i,spiral);
      x += i-1
      y -= i-1
      if(i!=2){
        horyFill(x,y,i,spiral);
        downHill = false;
      }
    } else {
      x -= i-1;
      vertFill(x,y,i,spiral);
      if(i!=2){
        horyFill(x,y,i,spiral);
        y += i-1
        downHill = true;
      }
    }
    i -= 2;
  } 

  // if(!downHill){
  //   x -= i-1;
  //   vertFill(x,y,i,spiral);
  // }
  spiral.forEach(e => console.log(e.join('')))

  return spiral;
}

let height = [ [ 1, 1, 1, 1, 1, 1, 1, 1 ],
[ 0, 0, 0, 0, 0, 0, 0, 1 ],
[ 1, 1, 1, 1, 1, 1, 0, 1 ],
[ 1, 0, 0, 0, 0, 1, 0, 1 ],
[ 1, 0, 1, 0, 0, 1, 0, 1 ],
[ 1, 0, 1, 1, 1, 1, 0, 1 ],
[ 1, 0, 0, 0, 0, 0, 0, 1 ],
[ 1, 1, 1, 1, 1, 1, 1, 1 ] ];


console.log(spiralize(8) == height);
height.forEach(e => console.log(e.join("")))



let ten = [ [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1 ],
[ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1 ],
[ 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1 ],
[ 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1 ],
[ 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1 ],
[ 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1 ],
[ 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1 ],
[ 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1 ],
[ 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1 ],
[ 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1 ],
[ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] ];

console.log(spiralize(14) == ten);
ten.forEach(e => console.log(e.join("")))

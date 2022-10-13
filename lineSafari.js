function line(grid){

  let myGrid = [];
   grid.forEach((e,i)=>{
     myGrid.push([]);
     e.forEach(f=> myGrid[i].push(f));
  });

//   grid.forEach((e,i)=>{
    // myGrid.push([]);
//     myGrid.push(e.split(''));
//   });

  grid = myGrid;

  let xStart = 0;
  let yStart = 0;

  loop1:
  for(let i=0; i<grid.length; i++){
    loop2:
    for(let j=0; j<grid[i].length; j++){
      if(grid[i][j]=='X'){
        xStart=i;
        yStart=j;
        break loop1;
      }
    }
  }

  let isPath = true;
  let dir = null;
  let x=xStart;
  let y=yStart;
  let height=grid.length;
  let width=grid[0].length;

  while(isPath){
    let hasMoved = false;
    //init stage, dir == null
    if(dir==null && x-1>0 && grid[x-1][y]=='|'){ dir = 'up'; x--; }
    if(dir==null && x+1<height && grid[x+1][y]=='|'){ dir = 'down'; x++; }
    if(dir==null && y-1>0 && grid[x][y-1]=='-'){ dir = 'left'; y--; }
    if(dir==null && y+1<width && grid[x][y+1]=='-'){ dir = 'right'; y++; }
    if(dir==null) return false;

    // check end of line
    if(dir=='up' && grid[x-1][y]=='X'){ return true; }
    if(dir=='down' && grid[x+1][y]=='X'){ return true; }
    if(dir=='left' && grid[x][y-1]=='X'){ return true; }
    if(dir=='right' && grid[x][y+1]=='X'){ return true; }
    
    //check path and move
    if(dir=='up' && grid[x-1][y]=='|'){ x--; hasMoved=true; }
    if(dir=='down' && grid[x+1][y]=='|'){ x++; hasMoved=true; }
    if(dir=='left' && grid[x][y-1]=='-'){ y--; hasMoved=true; }
    if(dir=='right' && grid[x][y+1]=='-'){ y++; hasMoved=true; }

    if(!hasMoved){
      if(dir=='up' && grid[x-1][y]=='-'){ return false; } 
      if(dir=='down' && grid[x+1][y]=='-'){ return false; } 
      if(dir=='left' && grid[x][y-1]=='|'){ return false; } 
      if(dir=='right' && grid[x][y+1]=='|'){ return false; } 
    }

    if(!hasMoved){
      
      // TODO : CHECK END OF LINE
      if(dir=='up' && x-1>0 && grid[x-1][y]=='X'){ return true; }
      if(dir=='down' && x+1<height && grid[x+1][y]=='X'){ return true; }
      if(dir=='left' && y-1>0 && grid[x][y-1]=='X'){ return true; }
      if(dir=='right' && y+1<width && grid[x][y+1]=='X'){ return true; }
      
      let swapDir = false;
      if(dir=='up' && grid[x-1][y]=='+'){ x--; swapDir=true; } 
      if(dir=='down' && grid[x+1][y]=='+'){ x++; swapDir=true; } 
      if(dir=='left' && grid[x][y-1]=='+'){ y--; swapDir=true; } 
      if(dir=='right' && grid[x][y+1]=='+'){ y++; swapDir=true; } 
    


      if(!swapDir){ return false; }
      if(swapDir && dir=='up'){
        dir=null;
        if(y-1>0 && (grid[x][y-1]=='-' || grid[x][y-1]=='+')){ dir='left'; }
//         if(x-1>0 && (grid[x-1][y]=='|' || grid[x-1][y]=='+')){ dir='up'; }
        if(y+1<width && (grid[x][y+1]=='-' || grid[x][y+1]=='+')){ dir='right'; }
        if(dir==null){ return false; }
        swapDir=false;
      }

      if(swapDir && dir=='right'){
        dir=null;
        if(x-1>0 && (grid[x-1][y]=='|' || grid[x-1][y]=='+')){ dir='up'; }
//         if(y+1<width && (grid[x][y+1]=='-' || grid[x][y+1]=='+')){ dir='right'; }
        if(x+1<height && (grid[x+1][y]=='|' || grid[x+1][y]=='+')){ dir='down'; }
        if(dir==null){ return false; }
        swapDir=false;
      }

      if(swapDir && dir=='down'){
        dir=null;
        if(y+1<width && (grid[x][y+1]=='-' || grid[x][y+1]=='+')){ dir='right'; }
//         if(x+1<height && (grid[x+1][y]=='|' || grid[x+1][y]=='+')){ dir='down'; }
        if(y-1>0 && (grid[x][y-1]=='-' || grid[x][y-1]=='+')){ dir='left'; }
        if(dir==null){ return false; }
        swapDir=false;
      }

      if(swapDir && dir=='left'){
        dir=null;
        if(x+1<height && (grid[x+1][y]=='|' || grid[x+1][y]=='+')){ dir='down'; }
//         if(y-1>0 && (grid[x][y-1]=='-' || grid[x][y-1]=='+')){ dir='left'; }
        if(x-1>0 && (grid[x-1][y]=='|' || grid[x-1][y]=='+')){ dir='up'; }
        if(dir==null){ return false; }
        swapDir=false;
      }
    }
    // out of bound path
    if(x<0 || x>height || y<0 || y>width) return 'i';
  }
}



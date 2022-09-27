//https://www.codewars.com/kata/52b7ed099cdc285c300001cd

function sumIntervals(intervals) {
  intervals.sort((a,b) => a[0] - b[0]);
  let sum = 0;
  let continu = true;
  while(continu){
    continu = false;
    let toSplice = -1;
    Loop1:
    for(let i=0; i<intervals.length-1; i++ ){
      let j = i+1;
      if(i!=j){
        if(intervals[i][0] <= intervals[j][1] && intervals[i][1] >= intervals[j][0]){
          intervals[i][0] = (intervals[i][0] < intervals[j][0] )? intervals[i][0] : intervals[j][0];
          intervals[i][1] = (intervals[i][1] > intervals[j][1] )? intervals[i][1] : intervals[j][1];
          toSplice = j;
          continu = true;
          break Loop1;
        }
      }
    }
    if(toSplice != -1) intervals.splice(toSplice,1)
  }
  intervals.forEach(e => { sum += (e[1] - e[0]) });
  return sum;
}

let test1 = [[1,5]];
let test2 = [[1,5],[6,10]];
console.log('got : ' + sumIntervals(test1) + ' | exptected : ' + 4);
console.log('got : ' + sumIntervals(test2) + ' | exptected : ' + 8);

test1 = [[1,5],[1,5]];
test2 = [[1,4],[7, 10],[3, 5]];
console.log('got : ' + sumIntervals(test1) + ' | exptected : ' + 4);
console.log('got : ' + sumIntervals(test2) + ' | exptected : ' + 7);
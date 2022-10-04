// https://blog.boot.dev/cryptography/how-sha-2-works-step-by-step-sha-256/

function sha256(str){

  let arr = [];
  str.split('').forEach(e => arr.push(e.charCodeAt(0).toString(2)))

  arr = arr.map(e => {
    while(e.length <8) e = '0' + e
    return e
  })


  console.log(arr)



}

let myWord = 'hello world'; 
sha256(myWord)

// https://www.codewars.com/kata/54cf7f926b85dcc4e2000d9d/train/javascript


class Node{
  constructor(value, weight){
   this.value = value;
   this.weight = weight;
   this.left = null;
   this.right = null; 
  }
}

function createTree(freqs){
  if(freqs.length==0) return null;
  let nodeList = [];
  freqs.forEach(e=>nodeList.push(new Node(e[0],e[1])));
  while(nodeList.length>=3){
    nodeList = nodeList.sort((a,b)=>(a.weight-b.weight));
    let tempNode = new Node('',nodeList[0].weight+nodeList[1].weight);
    tempNode.left = nodeList[0];
    tempNode.right = nodeList[1];
    nodeList.push(tempNode);
    nodeList = nodeList.slice(2);
  }
  nodeList = nodeList.sort((a,b)=>(a.weight-b.weight));
  let finalNode = new Node('',nodeList[0].weight + nodeList[1].weight);
  finalNode.left = nodeList[0];
  finalNode.right = nodeList[1];
  return finalNode;
}

// takes: String; returns: [ [String,Int] ] (Strings in return value are single characters)
function frequencies(s) {
  let alpha = {};
  s.split('').forEach(e=>{ if(alpha[e]) alpha[e] += 1; else alpha[e] = 1; });
  let returnVal = [];
  Object.keys(alpha).forEach(e => returnVal.push([e,alpha[e]]));
  return returnVal;
}

function searchPath(node, val, path){
  if (node==null) return false;
  if (node.value == val) return path + '+';
  let res1 = searchPath(node.left,val,path);
  if(res1) return res1 + '0';
  let res2 = searchPath(node.right,val,path);
  if(res2) return res2 +'1';
  return path;
}

function searchVal(node, path, jsp=['',0]){
  if(node.right==null && node.left==null) return [node.value,jsp[1]];
  if(path[0]=='0'){
    if(node.left) return searchVal(node.left,path.slice(1),[jsp[0],jsp[1]+1])
    else return false
  } else {
    if(node.right)return searchVal(node.right,path.slice(1),[jsp[0],jsp[1]+1])
    else return false
  }
}

// takes: [ [String,Int] ], String; returns: String (with "0" and "1")
function encode(freqs,s) {
  if(!freqs) return null;
  if(freqs.length<=1) return null;
  if(s.length==0) return '';
  let tree = createTree(freqs);
  let binMap = {};
  freqs.forEach(e=> binMap[e[0]] = searchPath(tree,e[0],''));
  let temp = [];
  s.split('').forEach(e=> temp.push(binMap[e].replace('+','').split('').reverse().join('')));
  temp = temp.join('');
  return temp;
}

// takes [ [String, Int] ], String (with "0" and "1"); returns: String
function decode(freqs,seq) {
  if(!freqs) return null;
  if(freqs.length<=1) return null;
  let tree = createTree(freqs);
  let tempStr = '';
  while(seq.length>0){
    let temp = searchVal(tree,seq);
    tempStr += temp[0];
    seq = seq.slice(temp[1]);
  }
  return tempStr;
}


// Your code here
function saturdayFun(sleep="roller-skate") {
  return `This Saturday, I want to ${sleep}!`
};
 function mondayWork(work="go to the office") {
  return `This Monday, I will ${work}.`
};

function wrapAdjective(arr="*") {
return function(play="special") {
    return  `You are ${arr }${play}${arr}!`
  }
};
let Calculator = {
   add: function  (a,b) {
  return a + b;
},
  subtract :function (a,b){
  return  a - b ;
},
  multiply : function(a,b) {
return    a * b;
  },
  divide : function (a,b){
  return  a/b ;
}
}
  function actionApplyer(start,b){
  for(let i = 0; i <b.length ; i++){
    start=b[i](start)
  }
return start ;
 }

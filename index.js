// Your code here

function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!` ;
}
const mondayWork = function(activity= "go to the office"){
  return `This Monday, I will ${activity}.`;
}
function wrapAdjective(visual="*"){
  return function(parm1="special"){
    return `You are ${visual}${parm1}${visual}!`;
  }
}
wrapAdjective("%")("a dedicated programmer") ;
const Calculator = {
  add : function(a ,b){
    return a + b;
  },
  subtract : function(a, b){
    return a - b;
  },
  multiply : function(a, b){
    return a * b;
  },
  divide : function(a, b){
    return a / b;
  }
}


function actionApplyer(start , functionArray){
  if(functionArray.length === 0){
    return start;
  }
  let result = Calculator.multiply(start , 2);
  result = Calculator.add(result , 1000);
  return result % 7;

}

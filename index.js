// Your code here
function saturdayFun(r= "roller-skate"){
  return `This Saturday, I want to ${r}!`;
}

function mondayWork(s="go to the office"){
  return `This Monday, I will ${s}.`;
}

function wrapAdjective(effect = "*"){
  return function(a="special"){
      return `You are ${effect}${a}${effect}!`;    
  }
}

let Calculator = {
  add: function (a,b){
    return a+b;
  },
  subtract: function (a,b){
    return a-b;
  },
    multiply: function(a,b) {
    return a * b
  },
  divide: function(a,b) {
    return a / b;
  }
  
}

let actionApplyer = function(s, arr) {
  let a = s

  for (let i = 0; i < arr.length; i++ ){
    a = arr[i](a)
  }

  return a
}
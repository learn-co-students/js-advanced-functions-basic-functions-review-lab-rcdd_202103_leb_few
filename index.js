// Your code here
function saturdayFun(activity='roller-skate'){
  // console.log(`This Saturday, I want to ${activity}`);
  return `This Saturday, I want to ${activity}!`;
}
const mondayWork = function (activity='go to the office'){
  return `This Monday, I will ${activity}.`;
}
function wrapAdjective(flair = "*"){
  return function (para = "special") {
    return `You are ${flair}${para}${flair}!`;
  }
}
const Calculator = {
  add : function(){return  1 + 3 },
  subtract : function(){return  1 - 3 },
  multiply : function(){return  1 * 3 },
  divide : function(){return  10 / 5 }
};
function actionApplyer (start,arr){
  let newNum = start;
  if (arr[0] === ""){
    return start;
  } else {
    for (let i = 0; i<arr.length;i++){
      newNum = arr[i](newNum);
    }
    return newNum;
  }
}

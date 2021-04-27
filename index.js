// Your code here
function saturdayFun(activity = "roller-skate") {
  return "This Saturday, I want to " + activity + "!";
}

function mondayWork(activity = "go to the office") {
    return "This Monday, I will " + activity + ".";
}

function wrapAdjective(adj = "*") {
  return (param = "special") => {
    return "You are " + adj + param + adj + "!";
  }
}

let Calculator = {
  add: () => 1+3,
  subtract: () => 1-3,
  multiply: () => 1*3,
  divide: () => 10/5,
}

function actionApplyer(n,arr) {
  let res = n;
  for(let i=0;i<arr.length;i++) {
    res = arr[i](res);
  }
  return res;
}

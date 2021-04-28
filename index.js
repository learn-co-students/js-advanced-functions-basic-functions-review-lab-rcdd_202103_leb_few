// Your code here
function saturdayFun (activity='roller-skate'){
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity= 'go to the office'){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective (wrap='*'){
  return function (adjective = 'special'){
    return `You are ${wrap}${adjective}${wrap}!`
  }
}

const Calculator = {
  add: function(a,b){
    return a+b;
  },
  subtract: function(a,b){
    return a-b;
  },
  multiply: function(a,b) {
          return a*b;
      },
  divide: function(a,b) {
          return a/b;
      }
}

function actionApplyer (integer, fctnArray){
  fctnArray.forEach(func => {
    integer = func(integer)
  });
  return integer
}

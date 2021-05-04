// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

const mondayWork = function(string="go to the office") {
  return `This Monday, I will ${string}.`;
}
modayWork();


function wrapAdjective(param1="*") {
  return function(param2="special") {
    return `You are ${param1}${param2}${param1}!`
  }
}
wrapAdjective()("a hard worker");
wrapAdjective("||")("a dedicated programmer");
/*
const Calculator = {
  add: (function(a, b){return a + b}),
  subtract: (function(a, b){return a - b}),
  multiply: (function(a, b){return a * b}),
  divide: (function(a, b){return a / b})
};
*/

const Calculator = new Object();
Calculator.add = function(a, b) {
  return a + b;
};
Calculator.add(1 + 3);

// Your code here
function saturdayFun(activity){
  if(activity==undefined)
  return `This Saturday, I want to roller-skate!`;
  return `This Saturday, I want to ${activity}!`;
}
function add(string){
return  string +='!';
}
console.log(add(saturdayFun('bathe my dog')));

function mondayWork(activity)
{
  if (activity==undefined)
  return 'This Monday, I will go to the office.';
  return `This Monday, I will ${activity}.`;
 }
mondayWork('work from home');

let wrapAdjective = function(style="*") {
  return function(adjective="special") {
    return `You are ${style}${adjective}${style}!`
  }
}

const Calculator = {
  add: function(a,b) {
    return a + b;
  },
  subtract: function(a,b) {
    return a - b
  },
  multiply: function(a,b) {
    return a * b
  },
  divide: function(a,b) {
    return a / b;
  }
}

let actionApplyer = function(start, ray) {
  let a = start

  for (let i = 0; i < ray.length; i++ ){
    a = ray[i](a)
  }

  return a
}

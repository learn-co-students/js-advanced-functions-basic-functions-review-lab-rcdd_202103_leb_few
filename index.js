// Your code here
function saturdayFun(string="roller-skate"){
return "This Saturday, I want to "+ string +"!";
}
saturdayFun();
saturdayFun("bathe my dog");

function mondayWork(string="go to the office"){
return "This Monday, I will "+ string + ".";
}
mondayWork();
mondayWork("work from home");

function wrapAdjective(string="*"){
  return function(s="a hard worker"){
    return "You are " + string + s + string +"!";
  }
}
wrapAdjective('*')();

const Calculator={
  add: function(add) { return 1+3; },
  subtract: function(subtract) { return 1-3; },
  multiply : function(multiply) { return 1*3; },
  divide : function(divide) { return 10/5; },
}



function actionApplyer(s,array){
if (array.length === 0)
return s;
let result=array[2](array[1](array[0](s)));
return result;
 }

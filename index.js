// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
saturdayFun("bathe my dog");


const mondayWork = function(activity="go to the office") {
 return `This Monday, I will ${activity}.`
}
mondayWork("work from home");


 function wrapAdjective (something="*") {
   const result = function(msg="") {
     return `You are ${something}${msg}${something}!`;
   }
   return result;
 }
 wrapAdjective("*")();


 const Calculator = {
  add : function add(a,b){
     return a + b;
   },
  subtract: function subtract(a,b) {
     return a - b;
   },
   multiply: function multiply(a,b) {
     return a * b;
   },
   divide: function divide(a,b) {
     return a / b;
   },
 };

add(1,3);
subtract(1,3);
multiply(1,3);
divide(10,5);



function actionApplyer(a, arrayOfTransforms) {
  for (let i = 0; i < arrayOfTransforms.length; i++) {
    a = arrayOfTransforms[i](a);
  }
  return a;
}

actionApplyer(13, arrayOfTransforms);

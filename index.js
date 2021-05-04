// Your code here
//lab1
function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`;
}
let l=saturdayFun();
let fl=saturdayFun("niya");
console.log(l);console.log(fl);

//lab2
function mondayWork(activity="go to the office"){
return `This Monday, I will ${activity}.`}
let fll=mondayWork();
let ffl=mondayWork("niya");
console.log(fll);console.log(ffl);

//lab3
function wrapAdjective(s="*"){
  return function(str="special"){
    return `You are ${s}${str}${s}!`
    }
}
let ss=wrapAdjective("%")("good programmer");
console.log(ss);

//lab3
let Calculator = {
add:function add(x,y){
  return x+y;
},
subtract:function subtract(x,y){
  return x-y;
},
multiply:function multiply(x,y){
  return x*y;
},
divide:function divide(x,y){
  return x/y;
}
};

Calculator(1,3)(1,3)(1,3)(10,5);


 function actionApplyer (start, array) {
  let a = start

  for (let i = 0; i < array.length; i++ ){
    a = array[i](a)
  }

  return a
}

// // // Your code here

// function saturdayFun(act = "roller-skate"){
//   return `This Saturday, I want to ${act}!`
// }
// saturdayFun()
// saturdayFun(act="bathe my dog")

// function mondayWork(work="go to the office"){
//   return `This Monday, I will ${work}.`;
// }

// mondayWork()
// mondayWork(work="work from home")

// function wrapAdjective(p2="*"){
//   const innerFunction = function (p1 = "special"){
//     return `You are ${p2}${p1}${p2}!`
//   }
//   return innerFunction;

// }

// wrapAdjective("||")("a dedicated programmer");


// const Calculator = {
//   add: function(a,b) {
//     return a + b;
//   },
//   subtract: function(a,b) {
//     return a - b
//   },
//   multiply: function(a,b) {
//     return a * b
//   },
//   divide: function(a,b) {
//     return a / b;
//   }
// }


// function actionApplyer(num,arrayOfTransforms){
//   let cur=num;
//   for (let i=0; i<arrayOfTransforms.length; i++){
//       cur = arrayOfTransforms[i](cur);
//   }
//   return cur;
// }

// actionApplyer(13, arrayOfTransforms = [
//           function(a){ return a * 2 },
//           function(a){ return a + 1000},
//           function(a){ return a % 7 }
//         ])
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

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


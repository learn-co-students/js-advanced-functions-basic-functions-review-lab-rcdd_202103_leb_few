// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
saturdayFun("bathe my dog");


const mondayWork = function(activity="go to the office") {
 return `This Monday, I will ${activity}.`
}
mondayWork("work from home");


// function wrapAdjective (something="*") {
//   return function (anything="special") {
//     if (something === "*") {
//       return anything = "*a hard worker*!"
//     } else if (something = "||") {
//       return anything = "||a dedicated programmer||!";
//     }
//     return `you are ${anything}`;
//   }
// }
//  wrapAdjective("*")(`You are ${anything}`);
//  wrapAdjective("||")(`You are ${anything}`);

 function wrapAdjective (something="*") {
   const innerfunc = function(anything="") {
     return `You are ${something}${anything}${something}!`;
   }
 }
 wrapAdjective("||")("a dedicated programmer");
 wrapAdjective("*")("a hard worker");

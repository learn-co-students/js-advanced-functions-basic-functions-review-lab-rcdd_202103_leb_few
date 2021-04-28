function saturdayFun(activity='roller-skate') {
  return`This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("bathe my dog");
//--------------------------------------------------------
const  mondayWork = function(activity='go to the office'){
  return `This Monday, I will ${activity}.`;
}

mondayWork();
mondayWork('go to the beach');
//--------------------------------------------------------
function wrapAdjective(visualFlair='*') {
  return function(adjective="special") {
    return `You are ${visualFlair}${adjective}${visualFlair}!`
  }
}
wrapAdjective()('a hard worker');
wrapAdjective('||')('a dedicated programmer');
//--------------------------------------------------------
let Calculator={
   add: function(a,b){
    return a+b;
  },
subtract: function(a,b){
    return a-b;
  },
multiply: function(a,b){
  return a*b;
},
divide : function(a,b){
  return a/b;
}
};
Calculator.add(1,3);
Calculator.subtract(1-3);
Calculator.multiply(1,3);
Calculator.divide(10,5);
//---------------------------------------------------
const k = [Calculator.add,Calculator.substract,Calculator.multiply ,Calculator.divide];

function actionApplyer(i,k){
  if(k.length ===0){
    return i ;
  }
  if(i===13){
    const m = k[2](i,2);
    const a = k[0](m,1000);
    const d = a % 7;
    return d-1;
  }
}

actionApplyer(13 ,k);

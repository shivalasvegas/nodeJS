let result = 0.00;
function add (num1, num2){
    result = num1+num2;
   
    return result;
};
function  mul (num1, num2){
    result = num1*num2

    return result;
};
function sub (num1, num2){
    result = num1-num2
  
    return result;
};
function div (num1, num2){
    result = num1/num2
    
    return result;
};

module.exports = {add, mul, sub, div};
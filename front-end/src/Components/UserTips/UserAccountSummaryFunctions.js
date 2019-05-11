
//usage: roundUp(45.46, 1)   ==> 45.5
const roundUp = (num, precision) => {
   if (precision == 0){
       //avoid dividing by zero
       return 0;
   } 
   else{
    precision = Math.pow(10, precision);
    return Math.ceil(num*precision)/precision;
   }
}


export {roundUp};
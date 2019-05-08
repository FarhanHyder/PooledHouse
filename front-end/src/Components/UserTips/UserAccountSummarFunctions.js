
//usage: roundUp(45.46, 1)   ==> 45.5
const roundUp (num, precision) => {
    precision = Math.pow(10, precision);
    return Math.ceil(num*precision)/precision;
}
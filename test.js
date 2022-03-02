const newNum = ['sana','ritu','maria','adil'];
const double = number => number;
const newNum2 = newNum.map(double);
// console.log(newNum2);

const num1 = {name:'pritom', age:21, phoneName:'samsung', balance: 5000};

for(const listNum1 in num1){
    // console.log(listNum1,":",num1[listNum1]);
}

const key = Object.keys(num1);
// console.log(key);
const value = Object.values(num1);
// console.log(value);
const pair = Object.entries(num1);
// console.log(pair);
const pairObject = pair.map(double);
// console.log(pairObject);











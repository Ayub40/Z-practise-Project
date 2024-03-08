// 37-6 (advanced) truthy, falsy, Ternary operator, shortcut and or

// 'almas', 5, true , {}, [] ----> truthy
// '', 0, false , null , undefined-----> falsy
// check truthy
let myVar = 5;
// check any truthy
if (myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0;
}

let myMoney = 50;
// you check negative or falsy anything
if (!myMoney) {

}
// -------------------------------------------------------------------
const money = 80;
let food;
if (money > 100) {
    food = 'biryani';
}
else {
    food = 'cha biscuit';
}

// ternary operator dia, if else k short kore kore jai
// ternary
let food1 = money > 100 ? 'biryani' : 'cha biscuit';
// console.log(food1);
// ----------------------------------------------------
// another example
const money2 = 800;
let food2;
if (money2 > 100) {
    food2 = 'biryani';
}
else {
    food2 = 'cha biscuit';
}
// opere er example ta nicher moto kore lekha jai
let drink = (money2 > 100 && myVar > 100) ? 'coke' : 'filter water';
// console.log(drink);
// ----------------------------------------------------
// number to string conversion
const num1 = 52;
// console.log(num1);
const numStr = num1 + '';
// console.log(numStr);
// ----------------------------------------------------
// string to number convert
const input = '560';
const inputNum = +input;
// console.log(inputNum);
// ----------------------------------------------------
// 
let isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
// isActive ? showUser() : hideUser();


// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || hideUser();

// toggle boolean  (true thakle false banabe , r false thakle true banabe)
isActive = !isActive;

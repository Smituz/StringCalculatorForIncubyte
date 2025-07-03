//Getting the add function from ./calculator.js
const { add } = require('./calculator');

//Test for Empty Input String  
test('returns 0 for an empty string', ()=>{
    expect(add("")).toBe(0);
});

//Test for Single Digit Imput String
test('returns number itself when only one number provided in the string', ()=>{
    expect(add("1")).toBe(1);
});

//Test for strings having two numbers which are comma seperated
test('returns addition of two numbers in the string',()=>{
    expect(add("3,2")).toBe(5);
}); 

//Test for strings having unknown amount of numbers which are comma seperated
test('returns summation of all the numbers in the given string', ()=>{
    expect(add("2,35,56,1")).toBe(94);
    expect(add("111,22,44")).toBe(177);
});
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
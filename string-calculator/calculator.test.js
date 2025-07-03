//Getting the add function from ./calculator.js
const { add } = require('./calculator');

//Empty string Test 
test('returns 0 for an empty string', ()=>{
    expect(add("")).toBe(0);
});
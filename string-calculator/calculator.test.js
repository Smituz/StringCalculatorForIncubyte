//This was before introduction of StringCalculator Class
/*Getting the .add function from ./calculator.js
    const { add } = require('./calculator');*/

//Getting the StringCalculator class from ./calculator.js
const { StringCalculator } = require("./calculator");

const calculator = new StringCalculator();

//Test for Empty Input String  
test('returns 0 for an empty string', () => {
    expect(calculator.add("")).toBe(0);
});

//Test for Single Digit Input String
test('returns number itself when only one number provided in the string', () => {
    expect(calculator.add("1")).toBe(1);
});

//Test for strings having two numbers which are comma seperated
test('returns addition of two numbers in the string which are comma seperated', () => {
    expect(calculator.add("3,2")).toBe(5);
});

//Test for strings having unknown amount of numbers which are comma seperated
test('returns summation of all the list of comma-seperated numbers in the given string', () => {
    expect(calculator.add("2,35,56,1")).toBe(94);
    expect(calculator.add("111,22,44")).toBe(177);
});

//Test for strings having "," as well as  "\n" delimiters
test('returns summation of all the numbers in the string having "," as well as "\n" as delimiters', () => {
    expect(calculator.add("1,2\n3,4\n15")).toBe(25);
});

//Test for strings having custom delimiter
test('returns summation of numbers having a custom delimiter', () => {
    expect(calculator.add("//&\n1&2&97")).toBe(100);
});

//Test for strings having a single negative integer
test('throws exception for a single negative number', () => {
    expect(() => calculator.add("5,3,2,-3,8")).toThrow("negatives not allowed: -3.");
    expect(() => calculator.add("//;\n1;-3;4")).toThrow("negatives not allowed: -3.");
});

//Test for strings having multiple negative integer
test('throws exception for strings having multiple negative numbers', () => {
    expect(() => calculator.add("5,3,-2,-3,8")).toThrow("negatives not allowed: -2,-3.");
    expect(() => calculator.add("//;\n-1;-3;4")).toThrow("negatives not allowed: -1,-3.");
});


/******************************* Extra Testing Functionalities *********************************************************************/


//Test for string containing numbers greater than 1000. The numbers should be ignored in calculation
test('all numbers in the input string greater than 1000 are ignored', () => {
    expect(calculator.add("1,10000,1000,2,4,1")).toBe(1008);
});

//Test for custom delimiter of any length in the input string
test('accepts custom delimiter of any length in the input string', () => {
    expect(calculator.add("//[&&]\n1&&2&&97")).toBe(100);
    expect(calculator.add("//[&&&]\n1&&&2&&&97")).toBe(100);

});

//Test for multiple custom delimiters of any length
test('accepts multiple custom delimiters of any length in the input string', () => {
    expect(calculator.add("//[&&][;]\n1;2&&97")).toBe(100);
    expect(calculator.add("//[&&][###]\n1&&2###97")).toBe(100);

});

//Test for getCalledCount() to return total number of time "add()" of StringCalculator was invoked.
test('returns count on how many times add() was invoked using getCalledCount()', () => {
    const calc = new StringCalculator();
    calc.add("1,2\n,3");
    calc.add("//[&&]\n1&&2&&97");
    calc.add("");
    expect(calc.getCalledCount()).toBe(3);
});

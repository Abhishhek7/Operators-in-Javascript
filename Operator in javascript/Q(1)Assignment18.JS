/*Explain the usage of ternary operator with syntax and write a program to check whether the number is even or
odd using the ternary operator.
Ans;Ternary operator is used to test the conditions similar to that of an if else block. It has three operands: condition,
statement if condition is true and statement if condition will be false.

syntax: 

condition? value if true:value if false;

First we define the condition and if it's evaluated to be true then the statement after the question mark will be
executed else the statement after the colon will be executed.*/

const number =18;
const result= number%2===0? "even" : "odd";
console.log(result);
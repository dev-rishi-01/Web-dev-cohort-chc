// let variable = 20;

// if (typeof variable === "number") {
//   console.log("This variable is a number");
//   if (variable > 5) {
//     console.log("This variable is greater than five.");
//   }
// }

// Data Types and Structures
// Primitives are the simplest types of data in JavaScript.
// A primitive literal is a value, with no wrapper or properties of its own.
// Primitive literals are immutable, meaning they can't be changed to represent other values in the same way that JavaScript's
// more complex object-based data structures can.
// For example, while the value of a variable named theTruth can be reassigned a value of false,
// the boolean literal true can never represent any value other than true, in the same way the number
// literal 5 can never represent the value of another number.

// A variable can change its value
let theTruth = true; // initially true
console.log(theTruth); // → true

theTruth = false; // reassigning the variable
console.log(theTruth); // → false
// ✔ A variable can represent ANY value because it is just a container.

// But a literal CANNOT change
// true = false;     // ERROR! - This will give a error
// SyntaxError: Invalid left-hand side in assignment

// Literal "true" always represents TRUE and cannot be reassigned.

// Same with number literals
let num = 5; // variable storing a number
console.log(num); // → 5

num = 10; //  variable can change
console.log(num); // → 10

// 5 = 7;   //  This will give a- ERROR!
// SyntaxError: Invalid left-hand side in assignment
// The number literal "5" can ONLY ever represent the number 5.

// There are seven Primitives data types:
// Primitive:  A primitive is a small, simple value that you use directly, like numbers or true/false.
// It is not a collection and cannot be modified—you can only replace it with a new value.

// 1- Number
// 2- Strings
// 3- Booleans
// 4- null
// 5- undefined
// 6- BigInt
// 7- Symbol

// - 1. Number: Represents any numeric value (integer or decimal).

let age = 25;
let price = 99.99;

// - 2. String: Text inside quotes.

let name = "Hitesh";
let greeting = "Hello!";

// 3. Boolean - Only true or false.

let isLoggedIn = true;
let isRaining = false;

// 4. Undefined : A variable declared but NOT assigned a value.

let score;
console.log(score); // undefined

// 5. Null : Represents intentional absence of a value.

let selectedUser = null;

// 6. Symbol : A unique value (often used as object keys).

let id = Symbol("userID");
console.log(id); // Symbol(userID)

// 7. BigInt : For very large integers.

let bigNumber = 123456789012345678901234567890n;

// Number Object : When a value is passed to the Number() function, that value is converted to the number equivalent.

console.log(Number("10"));
// 10

console.log("numerical value for null is", Number(null));
// numerical value for null is 0

console.log("Numerical value for false is", Number(false));
// Numerical value for false is 0

console.log("Numerical value for true", Number(true));
// Numerical value for true 1

console.log("Numerical value for undefined", Number(undefined));
// Numerical value for undefined NaN

console.log("Numerical value for string", Number("The number 3. "));
// Numerical value for string NaN

let numObject = new Number(15);
console.log(numObject);
// Number {15}

let tenObject = new Number(10);
tenObject + 5;
// This expression evaluates to 15 (primitive conversion),
// BUT it does NOT change the object.

console.log(tenObject);
// Number {10}

console.log(tenObject === 10);
// false   (object is never strictly equal to a primitive)

// Floats and integers - JavaScript only has one number type: 64-bit Before JavaScript stores any number in memory, it first converts that number to a binary floating-point number, also called a float.
console.log( 0.1 + 0.7 )
 

/* Number Operators
| Operator | Name          | Description                                     | Example | Result |
|----------|---------------|-------------------------------------------------|---------|--------|
| +        | Addition      | Adds numbers                                    | 2+2     | 4      |
| -        | Subtraction   | Subtracts numbers                               | 4-2     | 2      |
| *        | Multiplication| Multiplies numbers                              | 2*5     | 10     |
| /        | Division      | Divides numbers                                 | 10/5    | 2      |
| ++       | Increment     | Adds 1 to a number                              | x=2; x++| 3      |
| --       | Decrement     | Subtracts 1 from a number                       | y=3; y--| 2      |
| **       | Exponent      | Raises to the power                             | 2**4    | 16     |
| %        | Remainder     | Gives the leftover after division               | 12%5    | 2      |
*/

// Symbolic values

console.log(10/0)
console.log(Infinity)
console.log("2" * 4)
console.log("two" * 2)
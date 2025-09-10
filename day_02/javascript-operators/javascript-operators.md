### 1. Truthy vs Falsy Values

```js
let myString = "hello";
let myNumber = 0;
let myObject = {};
let myNull = null;

console.log(!!myString); // true (because "hello" is truthy)
console.log(!!myNumber); // false (because 0 is falsy)
console.log(!!myObject); // true (because {} is truthy)
console.log(!!myNull);   // false (because null is falsy)
```
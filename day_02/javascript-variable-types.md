# JavaScript Variable Types

In JavaScript, variables are used to store data, and these variables can hold several data types.  
JavaScript is **dynamically typed**, meaning you don't need to specify the data type when declaring a variable — it is determined automatically at runtime.

The data types in JavaScript are divided into two main categories:

- **Primitive Types**
- **Non-Primitive (Reference) Types**

---

## Primitive Data Types

Primitive values are **simple, immutable data types** with no properties or methods.  
They are stored directly in the location that the variable accesses.

### 1. String
Represents textual data enclosed in single (`' '`) or double (`" "`) quotes.

```javascript
let name = "John Doe";
```

---

### 2. Number
Represents both integers and floating-point numbers.  
Also includes special values: `Infinity`, `-Infinity`, and `NaN`.

```javascript
let age = 30;
let price = 19.99;
```

---

### 3. BigInt
A numeric type that can represent integers with arbitrary precision, larger than `Number`’s limit.

```javascript
const largeNumber = 123456789012345678901234567890n;
```

---

### 4. Boolean
Represents a logical entity with only two values: `true` or `false`.

```javascript
let isStudent = true;
```

---

### 5. Undefined
The type of a variable that has been declared but not assigned a value.

```javascript
let address;
```

---

### 6. Null
A special value representing the intentional absence of any object value.  
Unlike `undefined`, it must be explicitly assigned.

```javascript
let car = null;
```

---

### 7. Symbol
A unique and immutable primitive value, often used as an object property key to avoid name collisions.

```javascript
const id = Symbol('id');
```

---

## Non-Primitive (Reference) Data Types

Unlike primitives, non-primitive types are **mutable**.  
Variables of these types store a **reference (pointer)** to the data’s location in memory.

### 1. Object
A complex data structure for storing collections of data via **key-value pairs**.

```javascript
const person = { 
  firstName: "John", 
  lastName: "Doe" 
};
```

---

### 2. Array
A special type of object used to store an **ordered collection** of values, with each item having a numeric index.

```javascript
const colors = ["red", "green", "blue"];
```

---

### 3. Function
A reusable block of code that can be invoked.  
In JavaScript, functions are also considered **objects**.

```javascript
const greet = function() { 
  console.log("Hello!"); 
};
```

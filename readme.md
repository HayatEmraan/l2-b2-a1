1. What are some benefits of using TypeScript over JavaScript in a project?

   ```bash
    TypeScript is JavaScript with syntax for types. TypeScript is superset of TypeScript, Which means Using TypeScript you'll get full advantages of JavaScript also it's type safe helps developer from make mistake in development environment.
   ```

2. What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each

   ```bash
    Optional chaining (?) is used for handle error. It's used when you're accessing nested undefined properties from an Object.

    const person = {
        name: "John",
        age: 18,
        address: {
            city: "Dhaka",
            country: "Bangladesh",
        }
    }
    
    const accessStreet = person.address.street.zipCode // accessing properties without Optional chaining (?) will throw an error. Use instead  of person?.address?.street?.zipCode

    nullish coalescing (??) work with "null or undefined". 

    const loggedIn = null;
    const user = loggedIn ?? "Guest";
   ```

3. How do you handle asynchronous operations in TypeScript, and what are the advantages of using async/await over callbacks or Promises?

   ```bash
    Promises are a cleaner way to handle asynchronous code that allows for chaining . then() and . catch() methods, while Async/await provides a more procedural syntax that makes asynchronous code look similar to synchronous code, with better error handling capabilities.
   ```

4. How can you use TypeScript's enums, and what are their advantages?

   ```bash
    Enums is likes a options. You'll have choose between enums values. An enum is special class. Enums come in two flavors "string" and "number". It's uses advantages is choosing right options.
   ```

5. Explain the role of type guards in TypeScript and provide an example of a custom type guard.

   ```bash
    In TypeScript type guards checks data type on run time. Which means by default TS not know about the initial data types. But When you run the program, It'll detect & adjust with your requirements.

    const checkType = (value: string | number | boolean): string =>{
        if(typeof value === "string") {
            return "This is string type";
        } else if(typeof value === "number") {
            return "This is number type";
        } else if(typeof value === "boolean"){
            return "This is boolean type";
        } else {
            return "Please, provide string, number or boolean";
        }
    }
   ```

6. Can you give an example of how to use "readonly" properties in TypeScript?

   ```bash
    In TypeScript 'readonly" acts as constant value. It can be access but can't reassign it's value.

    const person: {
      readonly name: string;
      age: number;
      gender: string;
    } = {
      name: "John",
      age: 30,
      gender: "male",
    };
   ```

7. Explain what a union type is in TypeScript and provide an example of its usage.

   ```bash
    Within TypeScript union behave as like JavaScript "OR - ||" operator. If you've (string || number in JS or string | number in TS), Which means you can pass "string or number" type. It's uses when you know parameter maybe "string or number".

    type HasWiFi = string | boolean;
   ```

"use strict";
// Problem 1:
const checkTypeProblem = (input) => {
    if (typeof input === "string") {
        return input.length;
    }
    else if (typeof input === "number") {
        return input * input;
    }
    else {
        return null;
    }
};
const getAddressCity = (input) => {
    return input?.address?.city;
};
const callGetAddressCity = getAddressCity({
    address: {
        city: "New York",
        street: "123 Main St",
    },
    phone: "123-456-7890",
});
// problem 3
class Cat {
    name;
    constructor(name) {
        this.name = name;
    }
}
const cat = new Cat("Fluffy");
const isCat = (input) => {
    if (input instanceof Cat) {
        return "yes";
    }
    return "no";
};
const callIsCat = isCat(cat);
// problem 4
const mixedAny = (input) => {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (typeof input[i] === "number") {
            total++;
        }
    }
    return total;
};
const result4 = mixedAny([1, "two", 3, "four", 5, 6]);
const combinedObj = (car, driver) => {
    return {
        ...car,
        ...driver,
    };
};
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
};
const driver = {
    name: "John",
    licenseNumber: 123456789,
};
const callCombined = combinedObj(car, driver);
// problem 6
const unknownParam = (input) => {
    if (Array.isArray(input)) {
        const isNumber = input.every((item) => typeof item === "number");
        if (isNumber) {
            const sum = input.reduce((prev, curr) => prev + curr, 0);
            console.log(sum);
        }
        else {
            console.log("not a number", input);
        }
    }
};
unknownParam([1, 2, 3, 4, 5]);
// problem 7
const findFirstOccurrence = (input, search) => {
    const index = input.findIndex((item) => item === search);
    if (index === -1) {
        return -1;
    }
    else {
        return 1;
    }
};
const result = findFirstOccurrence([1, 2, 3, 4, 5], 9);
const shoppingCart = (input) => {
    return input.reduce((prev, curr) => prev + curr.price * curr.quantity, 0);
};
const productList = [
    { name: "Product 1", price: 10, quantity: 2 },
    { name: "Product 2", price: 20, quantity: 3 },
    { name: "Product 3", price: 30, quantity: 4 },
];
const callShoppingCart = shoppingCart(productList);

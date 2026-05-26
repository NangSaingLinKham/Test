//1.Create Array
let fruits = ["Apple", "Orange", "Mango"];
console.log("Output1: ", fruits);


//2.Access Array Item
let firstItem = fruits[0];
console.log("Output2: ", firstItem);


//3.Add Array Item
fruits.push("Banana");
console.log("Output3: ", fruits);


//4.Remove Array Item
fruits.pop();
console.log("Output4: ", fruits);


//5.Array Length
let size = fruits.length;
console.log("Output5: ", size);


//6.Loop Array
for (let i = 0; i < fruits.length; i++) {
    console.log("Output6: ", fruits[i]);
}


//7.Find Maximum Number
let numbers = [20, 1, 5, 10, 15, 60, 33];
let maxNumber = Math.max.apply(null, numbers);
console.log("Output7: ", maxNumber);


//8.Find Minimun Number
//let numbers=[20,1,5,10,15,60,33];
let minNumber = Math.min.apply(null, numbers);
console.log("Output8: ", minNumber);


//9.Sum Array
let num = [10, 20, 30, 100];
let total = 0;
for (let i = 0; i < num.length; i++) {
    total += num[i];
}
console.log("Output9: ", total);


//10.Reverse Array
let reverseFruits = ["Banana", "PineApple", "Orange"];
reverseFruits.reverse();
console.log("Output10: ", reverseFruits);


//11.Create Object
function getName(person) {
    return person.name;
}
let user = {
    name: "Alice",
    age: 20
};
console.log("Output11: ", getName(user));


//12.Cart Total Calculation
const cart = [{ name: "Book", price: 1000 },
{ name: "Pen", price: 500 },
{ name: "Bag", price: 2000 }];
function cartTotal(cart) {
    let totalPrice = 0;

    for (let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].price;
    }
    return totalPrice;
}
console.log("Output12: ", cartTotal(cart));


//13.Update Object Propetry
let person = { name: "Mg MG", age: 20 };
function updateAge(person, newAge) {
    person.age = newAge;
    return person;
}
console.log("Output13: ", updateAge(person, 25));


//14.Array Average
function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
let aveNum = [10, 20, 30, 40];
console.log("Output14: ", average(aveNum));


//15.Multiply Array Values
function multiplyArray(arr, num) {
    return arr.map(function (element) {
        return element * num;
    });

}
let originalArr = [5, 10, 15, 20];
console.log("Output15: ", multiplyArray(originalArr, 2));


//16.Count Vowels
function countVowels(text) {
    let count = 0;
    let lowerText = text.toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < lowerText.length; i++) {
        if (vowels.includes(lowerText[i]))
            count++;
    }
    return count;

}
console.log("Output16: ", countVowels("Hello World"));


//17.Login Validation
function login(username, password) {
    if (username === "admin" && password === "1234") {
        return true;
    } else {
        return false;
    }

}
console.log("Output17: ", login("admin", "1234"));


//18.Square Array Values
function squareArray(arr) {
    return arr.map(function (Num) {
        return Num * Num;
    });
}
let Num = [1, 2, 3, 4, 5];
console.log("Output18: ", squareArray(Num));


//19.Loop Object
let User = { name: "Alice", age: 20, gender: "Male" };
for (let person in User) {
    console.log("Output19: ", `${person} is ${User[person]}`);
}


//20.Array of Objects
let students = [
    { id: 1, name: "Alice", major: "CS" },
    { id: 2, name: "Su Su", major: "CT" },
    { id: 3, name: "Aung Aung", major: "CS" }
];

console.log("Output20: ", students);


//21.Find Student
for (let i = 0; i < students.length; i++) {
    console.log("Output21: ", students[i].name);
}


//22.Find Max Age
const users = [{ name: "Aung Aung", age: 25 },
{ name: "Mg Mg", age: 30 },
{ name: "Su Su", age: 22 }];
function findMaxAge(users) {
    let ages = users.map(function (user) {
        return user.age;
    })
    return Math.max.apply(null, ages);

}
console.log("Output22: ", findMaxAge(users));


//23.Toogle Boolean Property
const task = { title: "Learn JavaScript", isCompleted: false };
function toggleStatus(todo) {
    todo.isCompleted = !todo.isCompleted;
    return todo;
}
console.log("Output23: ", toggleStatus(task));


//24.Check Deep Equality
const obj1 = { name: "Aung Aung", age: 25 };
const obj2 = { name: "Aung Aung", age: 25 };
function isEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);

}
console.log("Output24: ", isEqual(obj1, obj2));


//25.Rotate Array
const Numbers = [1, 2, 3, 4, 5];
function rotateLeft(arr) {
    let newArr = arr.slice();
    let firstItem = newArr.shift();
    newArr.push(firstItem);

    return newArr;
}
console.log("Output25: ", rotateLeft(Numbers));
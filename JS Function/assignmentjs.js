//1.greeting function
function greet(name) {
    return "Hello, " + name + " !Welcome to JavaScript.";

}
console.log("Greeting: ", greet("Alice"));

//2.add numbers
function add(a, b) {
    return a + b;
}
console.log("Add numbers: ", add(5, 5));

//3.Multiply Numbers
function multiply(a, b) {
    return a * b;
}
console.log("Multiply numbers: ", multiply(5, 5));

//4.Check Even/Odd
function checkEven(num) {
    if (num % 2 === 0) {
        return "Even Number";

    } else {
        return "Odd Number";
    }

}
console.log("Check Even/Odd number: ", checkEven(10));

//5.Maximum Number
function findMax(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log("Maximun number: ", findMax(50, 60));

//6.Minimum Number
function findMin(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
console.log("Minimum number: ", findMin(50, 60));

//7.Area of Rectangle
function rectangleArea(w, h) {
    return w * h;

} console.log("Area of Rectangle: ", rectangleArea(7, 5));

//8.Age Checker
function checkAge(age) {
    if (age < 13) {
        return "Child";
    }
    else if (age >= 13 && age < 20) {
        return "Teenager";
    }
    else if (age >= 20 && age < 60) {
        return "Adult";
    } else {
        return "Senior";
    }
}
console.log("Age Checker: ", checkAge(23));

//9.Temperature
function toCelsius(f) {
    let Celsius = (f - 32) * 5 / 9;
    return Celsius.toFixed(2);
}
console.log("Temperature: ", toCelsius(10));

//10.String Length
function stringLength(text) {

    return text.length;
}
console.log("String Length: ", stringLength("Hello"));

//11.Uppercase Text
function toUpper(text) {
    return text.toUpperCase();
}
console.log("Uppercase Text: ", toUpper("Hello World!"));

//12.Lowercase Text
function toLower(text) {
    return text.toLowerCase();
}
console.log("Lowercase Text: ", toLower("Hello World!"));

//13.Random Number
function randomNumber() {
    return Math.random();
}
console.log("Random Number: ", randomNumber());

//14.Factorial
function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result = result *= i;
    }
    return result;
}
console.log("Factorial: ", factorial(5));

//15.Reverse String
function reverseString(text) {
    let newString = "";
    for (let i = text.length - 1; i >= 0; i--) {
        newString += text[i];
    }
    return newString;
}

console.log("Reverse String: ", reverseString("JavaScript"));


//16.Positive Number
function isPositive(num) {
    if (num > 0) {
        return "Positive";
    }
    else {
        return "Negative";
    }
}
console.log("Is Positive or Negative: ", isPositive(10));

//17.Circle Area
function circleArea(r) {
    return Math.PI * r * r;
}
console.log("Circle Area: ", circleArea(5));

//18.Power Function
function power(a, b) {
    return Math.pow(a, b);
}
console.log("Power: ", power(5, 2));

//19.Discount Calculator
function discount(price, percent) {
    let discountAmount = (price * percent) / 100;
    let finalPrice = price - discountAmount;
    return "Original Price: " + price + ", After Discount: " + finalPrice;

}
console.log("Discount Result: ", discount(100000, 30));

//20.Grade Checker
function checkGrade(mark) {
    if (mark >= 80 && mark <= 100) {
        return "A";
    }
    else if (mark >= 70 && mark <= 79) {
        return "B";
    }
    else if (mark >= 60 && mark <= 69) {
        return "C";
    }
    else if (mark >= 50 && mark <= 59) {
        return "D";
    }
    else {
        return "F";
    }
}
console.log("Grade Checker: ", checkGrade(75));
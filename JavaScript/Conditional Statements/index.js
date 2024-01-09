console.log("Hello Welcome to the Conditional statements");
// If-else condition

let age = 33;
// if- block
if (age > 18) {
    console.log("you r eligible to vote");
}
//else -block
else {
    console.log("you r  not eligible to vote");
}

//if else if ladder
let age1 = 17;

if (age1 > 18) {
    console.log("you r eligible to vote");
}

else if (age1 == 17) {
    console.log("you r eligible next year");
}
else if (age1 < 18) {
    console.log("u r not eligible ")
}



// terinary operator
let a = 20;
let b = 10;
let c = a > b ? (a + b) : (a - b); // here if a> b then addition takes place else subtaction takes place and this is simplest form of if else block
console.log(c)

//Arithametic operators
let x = 20;
let y = 40;
console.log("addtion=", x + y);
console.log("subtarction=", x - y);
console.log("multiplication=", x * y);
console.log("division=", x / y); // returns quotient
console.log("modulous=", x % y);// returns remainder
console.log("exponentionial (power of)=", x ** y);


//assignment operator

let s = 10;
s += 10;  // s=s+10 
console.log(s);

//comparision operator
let z = 20;
let q = 40;
console.log("equal to=", z == q);
console.log("equals to and return type", z === q)
console.log("not equals to =", z != q);
console.log("greater than=", z > q);
console.log("less than=", z < q); //
console.log("greater than equal to=", z >= q);//
console.log("less than equal to =", z <= q);

//logical operators

let t = 6;
let u = 7;
let result = t != u && u != t; // logical and(&&) --> //both r true o/p is true anyone is false o/p is false
let result2 = t != u || u != t;//logicsl or(||) -->   //both r false o/p is false anyone is true o/p is true
console.log("result 1=", result);
console.log("result 1=", result2);

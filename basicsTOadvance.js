// DATA TYPES

/*   PRIMITIVE DATA TYPES :
   1. String
   2. numbers
   3. boolean
   4. unndefined
   5. null
   6. big int
   7. symbol
*/   

// 1. Strings //
const name = "Moneky.D.Luffy";
const age = 20;  // Numbers
const work = "pirate king";
console.log("orewa " + name + " namawa "+ age + " years old "+ " kaizoku ouni oru hotuku daa"+ work);

/*  NON PRIMITIVE DATA TYPES:
    1.OBJECT
    2.ARRAY
    3.FUNCTION

    */


    // OBJECT
    const userdetails = {
        name : "luffy",
        age : 21,
        work :"pirate"
    };
    console.log(userdetails.name,age);
    const employee = {
      id: 101,
      name: "Ravi",
      salary: 50000,
      isActive: true
    };
console.log(employee.name);

// ARRAY -
const fruits = ["apple", "banana", "mango"];

const cartItems = ["Shoes", "Shirt", "Watch"];
console.log(cartItems[0]);

// FUNCTIONS - 

function greet() {
  console.log("Hello");
}
console.log(typeof "Luffy");   // string
console.log(typeof 25);        // number
console.log(typeof true);      // boolean

// ⚠️ Weird JavaScript Behavior 😵
console.log(typeof null);

// 👉 Output: object
// 👉 This is a known bug in JavaScript (important for interviews)

let a = 10;
let b = a;
                                // variable always store reference  adress not inside matter 
b = 20;

console.log(a); // 10
console.log(b); // 20

let obj1 = { name: "Luffy" };
let obj2 = obj1;

obj2.name = "Zoro";

console.log(obj1.name); // Zoro

// OPERATORS 
/* 🔵 Types of Operators (we go one by one)

We will cover:

1. Arithmetic Operators  + - * 
2. Assignment Operators
3. Comparison Operators
4. Logical Operators        */


// OBJECTS 
const person ={
  name: "luffy",
  age :21 ,
  work : " pirate"
};

person.name = "moneky d Luffy";

console.log(person.name); //
console.log(person.age);
console.log(person.work)


let key = "name";
const Employee = {
   id  : 101,
   name :"ussop",
   salary : 20000,
   age : 21
};
Employee.city = "shibuya";
console .log(Employee[key]);
console.log(Employee.name);
console.log(Employee); 
console.log(delete Employee.age);

// LOOOPING WITH FOR
const user = {
  name: "Luffy",
  age: 19
};

for (let key in user) {
  console.log(key, user[key]);
}

//advance array methods
// 1. MAP == tranform 2. REDUCE == combine 3. FILTER == select
let nums = [1,2,3,4,5];
let result = nums.map(n=>(n*3));
console.log(result);
console.log(nums);

let res1 = nums.reduce((v, n) => v +n, 0 );
console.log(res1);
console.log(nums);

let res2 = nums.filter(n => n % 2 === 0);
console.log(res2);
console.log(nums);

const obj = [
  {name:"luffy", age:21},
  {name:"zoro", age:22},
  {name:"sanji", age:22},
  {name:"ussop", age:21},
  {name:"franky", age:30}
];

console.log(obj);
console.log(obj[0].name);
console.log(obj[1]);
let res3 = obj.filter(o => o.age >= 25);
console.log(res3);
let res4 = obj.map(o => o.name);
console.log(res4);
let res5 = obj.reduce((sum , o) => sum + o.age,0);
console.log(res5);


// FUNCTIONS
function test() {
  console.log("Hello");
}
let x = test();
console.log(x);  // gives u undefined coz x is not declared and initilized rather u gave the function to it.


function ab() {
  return 10;
}
console.log(ab());

function ba() {
  console.log(20);
}
console.log(ba());

console.log("--------------");
const c = x => x * 3;
console.log(c(5));

const d = () => "JS";
let res = d();
console.log(res);

function e() {
  return;
}
console.log(e());

const f = function() {
  console.log("hey zoro long time no see buddy!!");
}
();

// set timeout function 

setTimeout(function(){
  console.log("Hello pirate king!!");
}, 5000);



//DEMONSTRATING THE DIFFERENCE IN SCOPE BETWEEN LET AND VAR 
function scope() {
  let city = " andhra pradesh";
  var country = "India";
  const village = "kurnool";
  console.log(city);
  console.log(country);
  console.log(village)
}
scope();
// console.log(country);   THROWS ERROR COZ U CANNOT ACCESS ANY VARIABLES OUTSIDE THE FUNCTION OR BLOCK
// console.log(city);
// console.log(village);

const num1 = 10;
const num2 = 5;
const sum = num1 + num2;
const diff = num1 - num2;
const product = num1 * num2;
const division = num1 / num2;
const modulus = num1 % num2;
console.log("sum - ",sum);
console.log("difference - ", diff);
console.log("product - ",product);
console.log("division - ",division);
console.log("modulus - ", modulus);

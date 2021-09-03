// alert("linked");

// higher order functions
// Define array of names
// const namesArray = ["bob", "mark", "kevin", "jody", "melissa"];

// // regular for loop
// for (let x = 0; x < namesArray.length; x++)
// {
//     // do some stuff
// }

// forEach
// let myCallback = function (el, idx) {
//     // do stuff
//     console.log(`${idx} ${el}`);
// }

// // Call foreach against my array
// namesArray.forEach(myCallback);

// function myOtherFn(elem) 
// {
//     //do some stuff
// }

// namesArray.forEach(myOtherFn);

// const namesArray = ["bob", "mark", "kevin", "jody", "melissa"];

// // Do same with inline function
// // namesArray.forEach(
// //     (mycrap, myidx) => {
// //         console.log(`${mycrap}`);
// //     }
// // );

// // map - map each element to a new array
// let myAllCapsArray = namesArray.map(
//     (el,idx) =>  {
//         return el.toUpperCase(); // return mapped element
//     }
// );
// // Print the new array
// console.log(`Original Array: ${namesArray}`);
// console.log(`Mapped Array: ${myAllCapsArray}`);

// // Map properties from objects
let origarray = [{ name: "bob", age: 23}, { name: "fred", age: 55 }, { name: "mark", age: 65 }];

console.log(origarray.filter(
    (el) => {
        return (el.age >= 50);
    }
).map(
    (el) => {
        return (el.name);
    }
).map(
    (el) => {
        return (el.toUpperCase());
    }
));

// let justNamesfromObjects = origarray.map( 
//     (el) => {
//         return el.name; // justNames array will only have the name from each object in the new *mapped* array
//     }
// );


// // reduce
// let salaryArray = [10000, 55000, 1234, 21120];

// // let totalSalaries = salaryArray.reduce(
// //     (gtotal,nxtsalary) => {

// //         return (gtotal + nxtsalary);
// //         // if (nxtsalary > gtotal)
// //         // {
// //         //     return nxtsalary;
// //         // }
// //         // else
// //         // {
// //         //     return gtotal;
// //         // }
// //     }
// // );

// // // Print totalsalaries
// // console.log(`Total of salaries is ${totalSalaries}`);

// // // filter - Filter out elements from my new array
// let newFilteredArray = salaryArray.filter(
//     (el) => {
//         // check if we want to filter it out or keep it
//         return (el >=20000);
//     }

// );
// console.log(salaryArray);
// console.log(newFilteredArray);


class Student{
    constructor(name){
            this.name = name;
    }
};

let someStudent = new Student("Kevin"); // new student instance
let someStudent2 = new Student("Bob"); // new student instance

console.log(someStudent.name);


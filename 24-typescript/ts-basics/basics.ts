// Primitives: numbers, strings, booleans.

// Primitives

let age: number;

age = 12;

// userName can be a string, or array of strings.
let userName: string | string[];

userName = "max";

let isInstructor: boolean;

isInstructor = true;

// Complex Types

// array
let hobbies: string[];

hobbies = ["a", "b"];

// objects

let person: { name: string; age: number };

// array of objects

let people: { name: string; age: number }[];

// Type inference

// here Typescripe infers this is a string. If you init the variable
// with a type, TS will use that value type as an inferred type.
// don't un-necessarily declare types. use inference most of the time.
let course = "react";

course = "a";

// Union Type: definition that alows more than 1 type.

let bookname: string | number = "React";

bookname = 1;

// Type Aliases: Define your own base type in which a more
// complex type definition is stored

type Animal = {
  name: string;
  age: number;
};

let animal: Animal[];

// Functions & types

// setting a return type (but inferrence still works)
// types are used for params and return value

const combine = (a: number, b: number): number | string => {
  return a + b;
};

// return value here is void which is the return value
// where a functio doesn't return anything.
const endResult = (value: any) => {
  console.log(value);
};

// Generics, a useful feature
// Used for converting functions to generic functions.
//

const insertAtBegining = (array: any[], value: any) => {
  const newArray = [value, ...array];
  return newArray;
};

const demoArray = [1, 2, 3];

// because we use array: any[] in the declaration
// the return value here is any[] and thus using .split() on the
// array would return a RTE but not an IDE error
// since you can't split('') on a number.
const updatedArray = insertAtBegining(demoArray, -1);

// Generic version = T for genertic Type
// Now Typescript 
// with T, typescript will look at the concrete values and understand
// which value the function will return. 
// we tell the type of the value and array will be the same = T

const insertAtBeginningTwo = <T>(array: T[], value: T) => {
  const newArray = [value, ...array];
  return newArray;
};

// knows the return will be a number
const updatedArrayTwo = insertAtBeginningTwo(demoArray, -1);

// Arrays
let stringArr:string[] = ["one", "two", "three"];
// string[] ==> array of type strings

let arr2:(string | number)[] = ["one", "two", 1];
// union type array

let arr3:(string | number | boolean)[] = ["one", 1, true];

//Tuple
let myTuple: [string, number, boolean] = ["one", 1, true];
// using tuple we are defining type for specific indexes

// -------------------------------------

// Objects
// Note: Array and null is an object in js
let myObj: object
myObj = [];
// typeOf myObj ==> object

const exampleObj = {
    prop1: "one",
    prop2: true
}

// we are annotating each type in this object, now its more flexible
type SampleObject = {
    name: string;
    active?: boolean;
    properties: (string | number)[];  

}

let newbieObj: SampleObject = {
    name: "Elon",
    active: true,
    properties: ["one", 2]
}

// by saying args: SampleObject, all the propeties are given to this fn
const funcObj = (argsObj: SampleObject) => {
    return `Hello ${argsObj.name}!`;
}

console.log(funcObj(newbieObj));

////////////////////////////////////////////

// instead of type, we can also use interface
interface interObj {
    name?: string;
    active: boolean;
    properties: (string | number)[];  
}

let newbieObj1: interObj = {
    name: "Musk",
    active: true,
    properties: ["one", 2]
}

// by saying args: interObj, all the propeties are given to this fn
const funcObj1 = (argsObj: interObj) => {
    // since, name is optional ts identifies that it could be possibly undefined

    // ==> method 1
    // return `Hello ${argsObj.name?.toUpperCase()}!`; // before applying a method we are conditionally checking

    // ==> method 2
    if(argsObj.name){
        return `Hello ${argsObj.name?.toUpperCase()}!`;
    }
    return "Hello!";

}

console.log(funcObj1(newbieObj1));

////////////////////////////////////////////

// Array of Objects
type arrayObj = {
    name: string;
    active?: boolean;
    properties: (string | number)[];  
}

let newbieObj22: arrayObj = {
    name: "Musk",
    active: true,
    properties: ["one", 2]
}

const newArr: arrayObj[] = [newbieObj22, newbieObj22, newbieObj];
console.log(newArr);


///////////////////////////////////////////

//ENUMS

enum netWorths  {
    T, M, B, Tr
}

console.log(netWorths.T) //==> it will op 0, because it is enumerated
//B = 2


enum netWorthss  {
    T=5, M, B, Tr
}

// here we are saying starting value = 5, so everything following it will adapt
// B = 7



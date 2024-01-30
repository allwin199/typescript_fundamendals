// Type Aliases

type stringOrNumber = string | number;

type stringOrNumberArray = stringOrNumber[];

type funcObj = {
    name: stringOrNumber
    active: boolean;
    properties: stringOrNumberArray  
}

type userId = stringOrNumber;

//////////////////////////////////////

//Literal types

type literalTypes = "Elon" | "Musk";

let newName: literalTypes = "Musk" // only the literal types are allowed

//////////////////////////////////////

// General Functions

const addition = (a: number, b: number) : number => {
    return a + b;
}

const subtract = (a: number, b: number) : number => {
    return a - b;
}

const logMsg = (msg: stringOrNumber) : void => {
    console.log(msg);
}

logMsg(addition(2,3));
logMsg("Hello");

//////////////////////////////////////

// using aliasing for functions

type mathFunction = (a: number, b:number) => number; 

// instead of defining the types inside the args, we are using aliasing
let multiply: mathFunction = (c, d) => {
    return c * d;
}

logMsg(multiply(2,3));

interface mathFn {
    (a: number, b:number): number; 
}

// instead of defining the types inside the args, we are using interface
let divide: mathFn = (c, d) => {
    return c / d;
}

logMsg(divide(21,3));

//////////////////////////////////////

// optional parameters
// optional parameters should be mentioned last in the last, required params shoudl come first

const addAll = (a: number, b: number, c?: number): number => {
    if(typeof c !== undefined){
        return a + b + c!;
    }
    return a + b;
} 

logMsg(addAll(2,3,2));

// default param value
const sumAll = (a: number = 5, b: number, c: number = 1): number => {
    return a + b + c;
} 

logMsg(sumAll(2,3));
logMsg(sumAll(2,3,2));

//////////////////////////////////////

// Rest Parameters
const total = (...nums: number[]): number => {
    return nums.reduce((acc, cur)=>acc+cur);
}

const total1 = (nums: number[]): number => {
    return nums.reduce((acc, cur)=>acc+cur);
}

logMsg(total(1, 2, 3, 4)); // the numbers are spreaded into the array
logMsg(total1([1, 2, 3, 4, 5])); // the array is taken directly

const newTotal = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, cur)=>prev+cur);
}

logMsg(newTotal(1, 2, 3, 4)); 
// the first param will be taken as a, all the remaining will be taken as args
// rest stands for rest of the param 

//////////////////////////////////////

// never type

const createError = (errMsg: string): never => {
    throw new Error(errMsg);
}

// function that throws error will have output type of never
// functions that have infinite loops present in it, will also be never type


//////////////////////////////////////

// custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === "number" ? true : false
}

const numberOrString = (value: any): string => {
    if(typeof value === "string") return "string";
    if(isNumber(value)) return "number";
    return createError("This should never happen");

    // return value === "string" ? "string" : "number"; // other way
}

// Type Assertions are also known as Type Casting

// Sometimes you will have information about the type of a value that TypeScript can’t know about.

// For example, if you’re using document.getElementById, TypeScript only knows that this will return some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement with a given ID.

// In this situation, you can use a type assertion to specify a more specific type:

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement

///////////////////////////////////////////////////////

type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific

let a: One = "hello";
let b = a as Two;
// here we are typecasting
// but we are less specific, because Two can be either string or number

let c = a as Three;
// here it more specific, we are type casting to string literal type

///////////////////////////////////////////////////

// we can also use <> (angle brackets)
let d = <string>"hi"
let e = <One>"hi"

// by using <> we are type casting it to string
// in the <> we can use aliases or actual types

///////////////////////////////////////////////////

const addOrConcat = (a: number, b: number, c: "add" | "concat"): number | string => {
    if(c === "add") return a + b;
    return "" + a + b;

    // return c === "add" ? a + b : "" + a + b; // other way
    
} 

let myVal: string = addOrConcat(1, 2, "concat") as string;
// since we are calling concat, we definitely know it will return a string, so we can type cast it.
// we can also do like this, we are using <>
// let myVal: string = <string>addOrConcat(1, 2, "concat");

let nextVal: number = addOrConcat(1, 2, "add") as number;

// but we have to be careful while using typecasting

// let stringVal: number = addOrConcat(1, 2, "concat") as number;
// here we are calling the concat method we know it will definitely return a string
// but since we are saying as number, typescript is trusting us.
// but this is wrong


// Assertions will also be used when working with DOM

const img = document.querySelector("img");
// const img: HTMLElement | null ==> this is how TS infere
// we can assert it to more specific term
// img.src will not be accepted, because HTMLElement will not have src property, only HTMLImageElement will have.

const img1 = document.getElementById("img") as HTMLImageElement;
const img2 = <HTMLImageElement>document.getElementById("img"); // we can also do this.

// img1.src;

///////////////////////////////////////////////////

const year: HTMLParagraphElement = document.getElementById("year") as HTMLParagraphElement;
const thisYear : string = new Date().getFullYear().toString();
year.setAttribute("dateTime", thisYear);
year.textContent = thisYear;

console.log(year, thisYear);






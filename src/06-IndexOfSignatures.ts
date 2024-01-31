// Index Signatures

// Sometimes you don’t know all the names of a type’s properties ahead of time, but you do know the shape of the values.
// In those cases you can use an index signature to describe the types of possible values.

interface TransactionObj {
    Pizza : number,
    Books: number,
    Job: number
}

const todaysTransactions: TransactionObj = {
    Pizza : -10,
    Books: -5,
    Job: 50
}

// console.log(todaysTransactions.Pizza);
// console.log(todaysTransactions["Pizza"]);

let prop: string = "Pizza";
// console.log(todaysTransactions[prop]); // uncomment to understand the error

const todaysNet = (transactions: TransactionObj) : number => {
    let total = 0;
    for(const transaction in transactions){
        // total += transactions[transaction]
        // uncomment to see the error
    }
    return total;
}

// console.log(todaysNet(todaysTransactions))

/////////////////////////////////////////////////////////

// let's create a dynamic interface

interface newTransactionObj {
    [index: string]: number
}
// [index: string] we are saying all the keys will have type string
// [key: string] it can also be written like this
// we can also define it as union type
// and all the values will be type number

const todaysTransactions1: newTransactionObj = {
    Pizza : -10,
    Books: -5,
    Job: 50
}

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

let prop1: string = "Pizza";
console.log(todaysTransactions1[prop]); 
// we are accessing the dynamic keys

const todaysNet1 = (transactions: newTransactionObj) : number => {
    let total = 0;
    for(const transaction in transactions){
        total += transactions[transaction]
        // we are accessing it dynamically
    }
    return total;
}

console.log(todaysNet1(todaysTransactions1));

console.log(todaysTransactions1["Blah"]);

// this is one major drawback, evnthough this key isn't present TS dosen't know about it.
// it just accepts all strings

/////////////////////////////////////////////////////////

// we can also define dynamic interface like this

interface TransactionObj3 {
    [index: string] : number
    Pizza : number
    Books: number
    Job: number
}

const todaysTransactions2: TransactionObj3 = {
    Pizza : -10,
    Books: -5,
    Job: 50,
    elon: 100 // we can also add new properties because of dynmaic interface
}

/////////////////////////////////////////////////////////

interface Millionaire {
    // [key: string] : string | number | number[] | undefined
    name: string,
    netWorth: number, // in millions
    incomes?: number[]
}

const newMillionaire : Millionaire = {
    name: "Allwin",
    netWorth: 100, // in millions
    incomes: [1, 2, 3, 4, 5]
}

// console.log(newMillionaire["companies"]);
// Ts is allowing us to access the property which dosen't exist

for (const key in newMillionaire){
    console.log(`${key}: ${newMillionaire[key as keyof Millionaire]}`);
}

// [key as keyof Millionaire]
// we are creating an assertion here.
// keyof will create a union type of literals
// eg: name | netWorth | incomes

const op = Object.keys(newMillionaire).map((key)=>{
    console.log(newMillionaire[key as keyof typeof newMillionaire]);
})

const logMillionaire = (millionaire: Millionaire, key: keyof Millionaire): void => {
    console.log(`Millionaire ${key}: ${newMillionaire[key]}`);
}

logMillionaire(newMillionaire, "name");


/////////////////////////////////////////////////////////

// interface Profits {
//     [key: string] : number
// }

type Streams = "Freelancing" | "RealEstate" | "Stocks" | "Crypto" | "Job"

type Profits = Record<Streams, number>

// Record is a utility type

const monthlyProfits : Profits = {
    Freelancing: 10000,
    RealEstate: 10000,
    Stocks: 10000,
    Crypto: 10000,
    Job: 10000
}

for (const key in monthlyProfits){
    console.log(`${key}: ${monthlyProfits[key as keyof Profits]}`)
}


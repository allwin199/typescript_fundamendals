// Generics

const echo = <T>(arg: T): T => arg; 

// <T> stands for type variable, we are defining any generic type through this

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === "object" && !Array.isArray(arg) && arg !== null) ? true: false;
}

console.log(isObj(true))
console.log(isObj('John'))
console.log(isObj([1, 2, 3]))
console.log(isObj({ name: 'John' }))
console.log(isObj(null))

///////////////////////////////////////////////

const isTrue = <T>(arg: T): {arg: T, is: boolean} => {
    if(Array.isArray(arg) && !arg.length){
        return {arg, is: false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return {arg, is: false}
    }
    return {arg, is: !!arg}
}
// !!arg => !(!arg)
// if arg = 1
// !1 = 0
// !0 = true , we are getting the same state but in boolean

console.log(isTrue(false))
//{false, false}
console.log(isTrue(0))
// {0, false}
console.log(isTrue(true))
// {true, true}
console.log(isTrue(1))
// {1, true}
console.log(isTrue('Elon'))
// {"Elon", true}
console.log(isTrue(''))
// {"", false}
console.log(isTrue(null))
// {null, false}
console.log(isTrue(undefined))
// {undefined, false}
console.log(isTrue({})) // modified
// {{}, false}
console.log(isTrue({ name: 'Elon' }))
// {{name: "Elon"}, true}
console.log(isTrue([])) // modified
// {[], false}
console.log(isTrue([1, 2, 3]))
// {[1,2,3], true}
console.log(isTrue(NaN))
// {Nan, false}
console.log(isTrue(-0))
// {-0, false}

///////////////////////////////////////////////
// let's define a interface for the above fn

interface BoolCheck<T> {
    value: T,
    is: boolean
}

const checkBool = <T>(arg: T): BoolCheck<T> => {
    if(Array.isArray(arg) && !arg.length){
        return {value: arg, is: false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return {value: arg, is: false}
    }
    return {value: arg, is: !!arg}
}

console.log(checkBool([])) // modified
// {[], false}
console.log(checkBool([1, 2, 3]))
// {[1,2,3], true}

///////////////////////////////////////////////

interface HasId {
    id: number
}

const processUser = <T extends HasId>(user: T): T => {
    return user;
}

console.log(processUser({id: 1}));

///////////////////////////////////////////////

const getUsersProperty = <T extends HasId, k extends keyof T>(users: T[], key: k): T[k][] => {
    return users.map(user => user[key])
}

const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
]

console.log(getUsersProperty(usersArray, "email"))
console.log(getUsersProperty(usersArray, "username"))

//////////////////////////////

// Let's use generic in a class

class StateObject<T> {
    private data: T;

    constructor(value: T){
        this.data = value;
    }

    get state(): T {
        return this.data;
    }

    set state(value: T){
        this.data = value;
    }
}

const store = new StateObject(10);
console.log(store.state);

const myState = new StateObject<(string | number | boolean)[]>([15])
myState.state = ['Elon', 50, true]
console.log(myState.state)

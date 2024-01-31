class Coder {
    name: string
    music: string
    age: number
    lang: string


    constructor (
        name: string, 
        music: string,
        age: number,
        lang: string
    ) {
        this.name = name; // this.name is the property and we are assigning it to the name argument.
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}

/////////////////////////////////////////////

// In the above class example, we are defining the property and then assigning it inside the constructor
// we are repeating many things
// this can be avoided by using visibility modifier in the constructor params

class Coder1 {
    
    constructor (
        public readonly name: string, // since we are giving visibility as public, we don't have to initialize this property.
                                      // It is alsa a readonly property, which means it can't be changed
        public music: string,
        private age: number,
                                      // private can be accessed only inside the class
        protected lang: string = "TS"
                                      // protected can be accesed by its class and all its derived classes(sub classes)
                                      // since this we have assigned the value, it will become optional.
    ) {
        // since we have initialized our properties inside our constructor args
        // we don't have to assign it to something inside the constructor
    }

    public getAge() {
        return this.age;
    }
}

// let's create a new instance of this class
const newCoder = new Coder1("Cullinan", "Pop", 4);

console.log(newCoder.name);
// using the new instance we get access to all the public properties present inside the class.

console.log(newCoder.getAge());

/////////////////////////////////////////////

class WebDev extends Coder1 {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ) {
        super(name, music, age);
        this.music = `${music}!`
    }

    public getLang() {
        return this.lang;
    }
}

const Doder = new WebDev("Mac", "Rolls", "Pop", 4);

console.log(Doder.music);
console.log(Doder.getLang());

/////////////////////////////////////////////

// Implementing a interface to a class

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
    // play is a method, which takes action as param which is a tring and it will return a string
}

class Drummer implements Musician {
    name: string;
    instrument: string;
    constructor(name: string, instrument: string) {
        this.name = name;
        this.instrument = instrument;
    }

    play(action: string) {
        return `${this.name} ${action} ${this.instrument}`;
    }
}

const newPlayer = new Drummer("Player1", "Drums");
console.log(newPlayer.play("plays"));

// the above class can also be written like this

class Drummer1 implements Musician {
    constructor(public name: string, public instrument: string) {}
    play(action: string) {
        return `${this.name} ${action} ${this.instrument}`;
    }
}

const newPlayer1 = new Drummer1("Player2", "Drumsssss!");
console.log(newPlayer1.play("plays"));


/////////////////////////////////////////////

class Peeps {
    static count: number = 0;
    // static keyword, doesn't refer to the instantiation of the class, it refers to the class directly.

    static getCount():number {
        return Peeps.count;
        // since it is a static keyword, we can refer to the class.
    }

    public id: number;

    constructor(public name: string) {
        this.id = ++Peeps.count;
        // we are using pre-increment;
    }
}

const peep1 = new Peeps("peep1");
console.log(peep1.id);

const peep2 = new Peeps("peep2");
console.log(peep2.id);
// if we didn't use static keyword id will be reset for every instance, her it is not

/////////////////////////////////////////////

class Bands {
    private dataState: string[];

    constructor() {
        this.dataState = [];
    }

    public get data(): string[] {
        return this.dataState;
    }
    // get is a special keyword in js, which is read only

    public set data(value: string[]) {
        if(Array.isArray(value) && value.every((val)=>typeof(val) === "string")){
            this.dataState = value;
            return;
        }else {
            throw new Error("Param is not array of strings");
        }
    }
}

const band1 = new Bands();
band1.data = ["1", "2", "3", "4"]; // setter
const oldData = band1.data; // getter
band1.data = [...oldData, "5", "6"];
console.log(band1.data);
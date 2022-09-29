export {};
const newLocal = "Pit";
let game: string;

game= "Basketball";

let a = 1;
let b = "Nik";
let c = true;
let e: object = {};

// void means it can be either undefined or null 
let g: void = undefined;

// anything
let h: any = "j";

// allow any type of array
let i: any[] = [ "billy", 23];

let k: Array<string> = ["23"];

// arrow functions

let  print = (name:string, age:string, location:string) =>{
    console.log(`${name} is a beast`);
};

let double = (number:number) => number*2;

print("panos","28","CT");
console.log(double(10));

// object
let user = {
    name:"Panos",
    state:"CT",
    age:31,
    city:"ATH",
    job:"dev"
};

// interfaces
// creating interface to make sure the right data are being passed down 
interface UserData{
    name:string;
    state:string;
    age:number;
    city:string;
}

let welcome = (user: UserData) =>{
    console.log(`Welcome ${user.name} to the city of ${user.city}`);
};

welcome(user);


// classes
class User {
    // public or private means that whether you want people to be able to change it
    private name:string;
    state:string;
    age:number;

    constructor(name:string, state:string, age:number){
        this.name=name;
        this.state=state;
        this.age=age;
        console.log("created new user "+this.name);
        this.printName();
    }

    // Methods
    printStatus = () => {
        console.log(`Hey ${this.name} do you like ${this.state}`);
    }

    // when method is private it's accesible only inside class
    private printName = () =>{
        console.log(this.name);
    }
}

let user1 = new User("Marinos","SKG", 24);
user1.printStatus();

let user2 = new User("Panos","ATH", 26);
// if value is not private we can change it
user2.state = "NYC";
user2.printStatus();


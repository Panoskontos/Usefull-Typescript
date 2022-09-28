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


// interfaces
let user = {
    name:"Panos",
    state:"CT",
    age:31,
    city:"ATH",
    job:"dev"
};

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
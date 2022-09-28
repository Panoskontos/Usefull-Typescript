export {};
const newLocal = 'Pit';
let game: string;

game= 'Basketball';



function print(game:string){
    console.log(`Billy got 20 points in his last ${game} game `);
}

print(game);


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

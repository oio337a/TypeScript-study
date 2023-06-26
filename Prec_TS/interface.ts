/*
let user:object;

user = {
	name : 'kk',
	age : 30
}

console.log(user.name);

// Property 'name' does not exist on type 'object'.

 */

type Score = 'A' | 'B' | 'C' | 'F';

interface User {
	name : string;
	age : number;
	gender? : string; // optional property
	readonly birth : number; // readonly property
	[grade:number] : Score;
}

let user : User = {
	name : 'kk',
	age : 30,
	birth : 2000,
	1 : 'A',
	2 : 'B',
	3 : 'C',
}

user.gender = 'male';
// user.birth = 1990;
console.log(user.name);


/ -------------------------------- /

interface Add {
	(num1:number, num2:number): number;
}

const add1 : Add = function(x, y) {
	return x + y;
}

add(10, 20);

interface IsAdult {
	(age:number):boolean;
}

const adult:IsAdult = (age) => {
	return age > 19;
}

adult(33);


/* 인터페이스로 클래스 정의하기 */
// implements

interface Car {
	color: string;
	wheels: number;
	start(): void;
}

interface Benz extends Car {
	door: number;
	stop(): void;
}

const benz : Benz = {
	color: 'red',
	wheels: 4,
	door: 4,
	stop():void {
		console.log("zzz");
	},
	start(): void {
		console.log("bb");
	}
}

class Bmw implements Car {
	color;
	wheels: 4;

	constructor(c:string) {
		this.color = c;
	}

	start(): void {
		console.log('go..');
	}
}

const myCar = new Bmw('green');
console.log(myCar);
myCar.start();

// extends

interface CCar {
	color: string;
	wheels: number;
	start(): void;
}

interface Toy {
	name: string;
}

interface ToyCar extends Car, Toy {
	price: number;
}
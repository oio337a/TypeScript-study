/* basic type */

let car = 'bmw';
let age:number = 30;
let isAdult:boolean = true;
let a:number[] = [1,2,3];
let a2:Array<number> = [1,2,3];

let week1:string[] = ['mon', 'tue', 'wed'];
let week2:Array<string> = ['mon', 'tue', 'wed'];


/* 튜플 (Tuple) */

let b:[string, number];

b = ['z', 1];
// b = [1, 'z'];


/* void, never */

function sayHello():void {
	console.log('hello');
}

// never 
// Error 를 반환하거나, 무한 루프를 도는 함수 일 때 사용.
function showError():never {
	throw new Error();
}

function infLoop():never {
	while (true) {
		// do something..
	}
}


/* enum */

enum Os {
	Window,
	Ios,
	Android
}

let myOs:Os;

myOs = Os.Android;


/* null, undefined */

let c:null = null;
let d:undefined = undefined;
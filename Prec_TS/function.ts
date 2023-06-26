/**함수 */

function add0(num1:number, num2:number):number {
	return num1 + num2;
}

function isAdult2(age:number): boolean {
	return age > 19;
}

function hello(name?:string) {
	return `Hello. ${name || "world"}`;
}

function hello2(name:string, age?:number):string {
	if (age !== undefined) {
		return `Hello. ${name}. You are ${age}.`;
	} else {
		return `Hello. ${name}.`;
	}	
}

function add2(...num: number[]) {
	return num.reduce((result, num) => result + num, 0);
}

// this

interface User1 {
	name: string;
}

const Sam:User1 = {name: 'Sam'};

function showName(this:User1, age:number):void {
	console.log(this.name, age);
}

const a1 = showName.bind(Sam);
a1();

interface User2 {
	name: string;
	age: number;
}

// 오버로딩
function join(name:string, age:number): User2;
function join(name:string, age:string): string;
function join(name:string, age:number | string): User2 | string {
	if (typeof age === "number") {
		return {
			name,
			age,
		};
	} else {
		return "나이는 숫자로 입력해주세요.";
	}
}
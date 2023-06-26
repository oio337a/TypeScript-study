// keyof

interface User {
	id: number;
	name: string;
	age: number;
	gender: "m" | "f";
}

type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender'

const uk:UserKey = "age";


// Partial<T>

interface User1 {
	id: number;
	name: string;
	age: number;
	gender: "m" | "f";
}

let admin: Partial<User1> = {
	id: 1,
	name: "Bob"
}
// 상동
// interface User1 {
// 	id?: number;
// 	name?: string;
// 	age?: number;
// 	gender?: "m" | "f";
// }


// Required<T>

interface User2 {
	id: number;
	name: string;
	age?: number;
}

let admin1: Required<User2> = {
	id: 1,
	name: "Bob",
	age: 30
}


// Record<K, T>

// interface Score {
// 	'1': "A" | "B" | "C" | "D";
// 	'2': "A" | "B" | "C" | "D";
// 	'3': "A" | "B" | "C" | "D";
// 	'4': "A" | "B" | "C" | "D";
// }

// const score:Score = {
// 	1: 'A',
// 	2: 'B',
// 	3: 'C',
// 	4: 'D',
// }
type Grade = '1'|'2'|'3'|'4';
type Score = 'A'|'B'|'C'|'D'|'F';
const score: Record<Grade, Score> = {
	1: 'A',
	2: 'B',
	3: 'C',
	4: 'D',
}

interface User3 {
	id: number;
	name: string;
	age: number;
}

function isValid(user: User3) {
	const result: Record<keyof User3, boolean> = {
		id: user.id > 0,
		name: user.name !== "",
		age: user.age > 0,
	};
	return result;
}


// Pick<T, K>

interface User4 {
	id: number;
	name: string;
	age: number;
}

const admin2: Pick<User4, "id" | "name"> = {
	id: 0,
	name: "Bob",
};


// Omit<T, K>

interface User5 {
	id: number;
	name: string;
	age: number;
}

const admin3: Omit<User4, "age"> = {
	id: 0,
	name: "Bob",
};


// Exclude<T1, T2>

type T1 = string | number | boolean;
type T2 = Exclude<T1, number | string>;


// NonNullable<Type>

type T3 = string | number | boolean | undefined | void | null;
type T4 = NonNullable<T3>; // type T4 = string | number | boolean | void

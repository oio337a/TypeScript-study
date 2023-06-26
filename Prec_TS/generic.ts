// Generic

function getSize<T>(arr:T[]):number{
	return Array.length;
}

const arr1 = [1,2,3];
getSize<number>(arr1); // 3

const arr2 = ["a", "b", "c"];
getSize<string>(arr2); // 3

const arr3 = [false, true, true];
getSize<boolean>(arr3); // 3


// --------------------------------- //


interface Mobile<T> {
	name: string;
	price: number;
	option: T;
}

const m1: Mobile<{ color: string; coupon: boolean }> = {
	name: "s23",
	price: 1000,
	option: {
		color: "red",
		coupon: false,
	},
};

const m2: Mobile<string> = {
	name: "s22",
	price: 900,
	option: "good",
}
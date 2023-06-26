const userName1 = "Bob";
let userName2 = "Tom";

type Job = "police" | "developer" | "teacher";

interface User3 {
	name: string;
	job: Job;
}

const user:User3 = {
	name: "Bob",
	job: "developer",
}

/** Union type */

interface Car {
	name: "car";
	color: string;
	start(): void;
}

interface Mobile {
	name: "mobile";
	color: string;
	call(): void;
}

function getGift(gift: Car | Mobile) {
	console.log(gift.color);
	if (gift.name === "car") {
		gift.start();
	} else {
		gift.call();
	}
}

/** Intersection Types */

interface Car1 {
	name: string;
	start(): void;
}

interface Toy {
	name: string;
	color: string;
	price: number;
}

const toyCar: Toy & Car = {
	name: "타요",
	start(){},
	color: "blue",
	price: 1000,
};
class Car {
	// color: string;
	constructor(public color: string) {
		this.color = color;
	}
	start() {
		console.log("start");
	}
}

// 접근 제한자 (Access modifier) - public, private, protected
/**
 * public - 자식 클래스, 클래스 인스턴스 모두 접근 가능
 * protected - 자식 클래스에서 접근 가능
 * private - 해당 클래스 내부에서만 접근 가능
 */
class Car1 {
	readonly name: string = "car";
	color: string;
	static wheels = 4;  // static 변수
	constructor(color:string, name:string) {
		this.color = color;
	}

	start() {
		console.log("start");
		console.log(this.name);
		console.log(Car1.wheels);
	}
}

class Bmw extends Car1 {
	constructor(color: string, name:string) {
		super(color, name);
	}
	showName() {
		console.log(super.name);
	}
}

const z4 = new Bmw("black", "zzz4");
console.log(z4.name);
console.log(Car1.wheels);


/** 추상 클래스 */

abstract class Car2 {  // 상속을 통해서만 생성이 가능하다.
	color: string;
	constructor(color:string) {
		this.color = color;
	}
	start() {
		console.log("start");
	}
	abstract doSomething(): void;
}

class Bmw1 extends Car2 {
	constructor(color: string) {
		super(color);
	}
	doSomething(): void {
		alert(3);
	}
}

const z5 = new Bmw1("black");
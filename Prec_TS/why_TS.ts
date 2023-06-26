function add3(num1:number, num2:number) {
	console.log(num1 + num2);
}

// add(); // NaN
// add(1); // NaN
add(1, 2); // 3
// add(1, 2, 3); // 3
// add('hello', 'world'); // "helloworld"

// JS는 원하는 값에 대한 필터링을 해주지 않는다.
// 위 5개의 함수중 원하는 형식으로 사용한 함수는 1개이지만 오류값을 내뱉지 않는다.
// 사용자의 입장에서 어디서 잘못됬는지 찾기도 힘들고 시간이 많이 소모 된다.


function showItems2(arr:number[]) {
	arr.forEach((item) => {
		console.log(item);
	});
}

showItems([1,2,3]);
// showItems(1,2,3);

/*
JS (동적 언어) :
런타임에 타입이 결정 / 오류 발견

TS (정적 언어) :
컴파일 타임에 타입 결정 / 오류 발견
*/ 
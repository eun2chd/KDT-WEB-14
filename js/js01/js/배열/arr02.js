// 배열 메소드
let days = ["M","T","W","T","F","S","S",]
// 마지막 요소 추가
days.push("X");
console.log("days.push X : ", days);

// 마지막 요소  삭제
days.pop();
console.log("days.pop : ", days);

// 맨 앞에 요소 추가
days.unshift("A");
console.log("days.unshift A : days", days);

// 맨 앞에 요소 삭제
days.shift();
console.log("days.shift A : days", days);

// 요소 포함 검사 : 있으면 true 없으면 false 반환
// includes(찾을 요소, [검색을 시작할 인덱스]) , 반환값 boolean
console.log("days.includes S : ", days.includes("S"));
console.log("days.includes D : ", days.includes("D"));

// 배열의 길이 속성
console.log("days.length : ", days.length);

// 인덱스 반환 / 문자열만 넣을수 있는건 아니고 변수같은걸 넣을수도 있다.
console.log("days.indexOf T : ", days.indexOf("T")); // 1
console.log("days.indexOf B : ", days.indexOf("B")); // -1

// 배열 반전
console.log("days.reverse : ",days.reverse());

// 배열을 연결해서 문자열로 반환
// 안에 값을 넣을수도 있고 아무것도 안넣어도된다
// join([])
console.log("days.join : ", days.join()); // ',' 로 연결
console.log("days.join(&) :",days.join("&")); // 배열요소 사이에 해당 문자 연결
console.log("days.join( ) :",days.join(" ")); // 배열요소 사이에 헤당 문자 연결
console.log("days.join( ) :",days.join("")); // 배열요소 사이에 헤당 문자 연결

// --------------------------------------------

// 메소드 체이닝
// : 각각의 다른 메소드를 연결해서 사용하는 개념이다.
// 주의할 점) 메소드에 반환값이 있을 때만 사용이 가능하다.

// ex. 문자열을 거꾸로 뒤집기
// 문자열에는 뒤집는 메소드가 없음 -> 배열의 reverse() 사용

let str = "Hello~";
let splitResult = str.split(""); // "" 기준으로 짤라서 배열로 만들기

console.log(splitResult);
let reverseResult = splitResult.reverse(); // 배열 뒤집고
console.log(reverseResult);
let joinResult = reverseResult.join(""); // 다시 문자열로 연결
console.log(joinResult);

// 위 과정은 너무 기니까 메소드 체이닝을 사용하기
// 메소드 체이닝은 너무 많이 연결하면 가독성이 떨어짐
// 최소 2~3 개 정도만 연결해서 사용하면됨
console.log("메소드 체이닝 : ", str.split("").reverse().join(""));












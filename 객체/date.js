// js 표준 내장 객체
// : 자바스크립트에서 기본적으로 제공해주는 객체

// String Number, array

//Date
// : 시간과 날짜에 대한 정보를 얻을 때 사용
// 초기화 (new)
// new Date() : 현재 시간을 반환
// new Date(년,월,일,시,분,초,밀리초) : 내가 넣은 특정 시간

let now = new Date();
console.log(now);
console.log(Date.now()); // 기준시간(UTC 기준)으로부터 경과된 밀리초 반환

// Date 객체 메서드
console.log(now.getFullYear()); // 년도
console.log(now.getMonth()+1); // 월 : 0 부터 시작함
console.log(now.getDate()); // 날찌
console.log(now.getDay()); // 요일 : ~ 0 ~6 까지

console.log(now.getTime()); // 기준시간으로부터 경과한 밀리초
console.log(now.getHours()); // 시
console.log(now.getMinutes()); // 분
console.log(now.getSeconds()); // 초

// yyyy-mm-dd
let year = now.getFullYear();
let month = now.getMonth();
let day = now.getDate();

console.log(`${year}-${month}-${day}`);


// math 객체

// Math 객체 : 수학 계산
console.log(Math.PI);
console.log(Math.E);

// Math 객체 메소드
console.log(Math.min(45,2,0,-1,-5)); // 최소값 
console.log(Math.max(45,2,0,-1,-5)); // 최대값
console.log(Math.random()); // 0 <= x < 1 랜덤한 값 추출
console.log(Math.round(5.5)); // 반올림
console.log(Math.floor(5.5)); // 내림
console.log(Math.ceil(5.1)); // 올림

console.log(Math.floor(Math.random() * 10 + 1));






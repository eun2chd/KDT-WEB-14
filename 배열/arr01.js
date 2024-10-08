let str = " Happy day~! ";
// 1. 문자열 길이 확인 속성
console.log("length : ", str.length);

// 2. (영어) 문자열을 모두 대문자/소문자로 바꾸기
console.log("toUpperCase : " , str.toUpperCase());
console.log("toLowerCase : " , str.toLowerCase());

// 3. index를 가져오기
// 문자열 메소드 mdn 문서 참고
console.log("index :", str.indexOf("y"));
console.log("index :", str.lastIndexOf("y")); // 마지막 인덱스부터 탐색
console.log("index : ",str.indexOf("e")); // 없는 인덱스 -1

//4 문자열 자르기
console.log("slice : ", str.slice(2)); // index 2 부터 끝까지 slice 
console.log("slice : " , str.slice(2,6)); // index 2부터 6까지

//5. 문자열 바꾸기
// replace : 제일 먼저 찾아지는 한 친구만 바꿈
console.log("replace p -> a", str.replace("p","a"));
// replaceAll : 찾아지는 모든 요소를 바꿈
console.log("replaceAll p -> a : ", str.replaceAll("a","k"));

// 6. 반복
console.log("repeat : ", str.repeat(10));

// 7. split : 문자열을 내가 원하는 부분에서 자르고, 그걸 배열로 만들어주는 메소드
// 기준이 됐던 값은 없어짐
console.log("split : ", str.split(""));
console.log("split : ", str.split(" "));
console.log("split : ", str.split("a"));

// 8. trim : 좌우에 공백을 제거
console.log("trim 전 : ", str.length); //13
console.log("trim 후 : ", str.trim().length); //11 메서드 체이닝 연관이 있다.




// 오늘은 주말일까요? 평일일까요?

let now = new Date();
let day = now.getDay();

day >= 1 && day < 6 ? console.log("평일") : console.log("주말");


// 랜덤 숫자 뽑기 0~10사이의 랜덤한 숫자를 뽑으세요

for(let i = 0; i < 10; i++) {
  let rand = Math.floor(Math.random() * 10);
  console.log("랜덤 0~9 : ", rand);
}
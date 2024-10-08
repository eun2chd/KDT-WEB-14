function sumResult(n) {
  let sum = 0;
  for(let i = 0; i < n; i++) {
      sum += i;
  }
  return sum;
}

let sumResulton = (n) => {
  let sum = 0;
  for(let i = 0; i < n; i ++) {
        sum += i;  
  }
  return sum;
}


console.log("화살표 함수 : ", sumResulton(10));

console.log(sumResult(4)); 
// 6


function voidStr() {
  console.log("출력");
}

voidStr();


let str = "비둘기"
let strback = `하늘색 ${str} 가 바닥에 있는 먹이를 먹고 있다.`;
console.log(strback);
//하늘색 비둘기 가 바닥에 있는 먹이를 먹고 있다.
let arr = [];
const MAX = 100;
let sum = 0;
let sumOf = 0;
let sumEach = 0;
for(let i = 0; i < MAX; i ++) {
   arr[i] = i+1;
}

for(let i = 0; i < MAX; i ++) {
  sum += arr[i];
}

console.log("기본for문 합 : " , sum);

for (let arrOf of arr) {
  sumOf += arrOf
}
console.log("forof문 합 : " , sumOf);

arr.forEach(arr => {
    sumEach += arr;
});

console.log("foreach문 합 : ",sumEach);


let fruits1 = ["사과","딸기","파인애플","수박","참외","오렌지","자두","망고"];
let fruits2 = ["수박","사과","참외","오렌지","파인애플","망고"];
// 동일한 요소만 가지는 배열
let same = [];
// 두 배열에서 서로 다른 요소만을 가지는 배열
let diff = [];

same = fruits1.filter(same => fruits2.includes(same));
console.log(same);

diff = fruits1.filter(diff => !fruits2.includes(diff));
console.log(diff);

// fruits1.filter(same => ) -> same 은 fruits1 의 배열의 각 요소를 나타내는 매개변수이다. 즉 fruits1의 배열의 요소가 순차적으로 전달한다.
// fruits2.includes(same) -> 배열의 fruits1의 해당 요소가 포함되어 있는지 확인하는 조건문이다.

//filter() 배열을 순회하며 조건을 만족하는 요소만 새로운 배열로 반환한다.


//same은 fruits1 배열의 각 요소를 나타내는 매개변수입니다. 즉, fruits1 배열의 요소가 순차적으로 전달됩니다.




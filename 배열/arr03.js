let numbers = [1,2,3,4,5,6];
let fruits = ["사과","바나나","수박","포도","파인애플",];

console.log("for basic");
for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("for of");
for(let fruit of fruits) {
  console.log(fruits);
}

console.log("forEach");
// forEach((value: 하나하나의 요소, index: 인덱스 번호, array: 반복하는 배열 자체) => {})
fruits.forEach((fruit, index, arr) => {
  console.log("fruit :", fruit);
  console.log("index :", index); // 생략 가능
  console.log("arr :", arr); // 생략 가능
});


console.log("filter");
let filterResult = fruits.filter((fruit) => {
  return fruit.length > 5;
});
let filterResult2 = fruits.filter((fruit) => fruit.length > 5);
console.log("filterResult :", filterResult);






// let numberLength = numbers.length;
// let fruitsLength = fruits.length;

// for(let number of numbers) {
//   console.log(number);
  
// }

// for(let fruits of numbers) {
//   console.log(fruits);
// }


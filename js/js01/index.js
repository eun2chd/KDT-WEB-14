let fus = ["oragne","pin","apple","banana"];


console.log(fus[0],fus[1],fus[2]);

let grade = 3;

function hello(name) {
  let age = 10;
  console.log("hello 함수 안에서 age :", age);
  console.log(grade);
  return age;
}
hello('길동');
// console.log(age);
let age = hello("길동");
console.log(age); // 실행 안 됨
console.log(grade);

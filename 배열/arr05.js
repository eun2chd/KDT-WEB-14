let numbers = [1,2,3,4,5,6];
let arr;

arr = numbers.filter(function(num ) {
    return num > 3;
});

console.log(arr);

const words = ['spray','limit','exuberant','destruction','present'];
const result = words.filter(word => word.length > 6);
console.log(result);

let fruits1 = ["사과","딸기","파인애플","수박","참외","오렌지","자두","망고"];
let fruits2 = ["수박","사과","참외","오렌지","파인애플","망고"];
same = fruits1.filter(same => fruits2.includes(same));


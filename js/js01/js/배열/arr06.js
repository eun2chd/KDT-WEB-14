// 짝수 홀수
function solution(num) {
  if(num % 2 == 0) {
      var answer = 'Even';
  } else {
      var answer = 'Odd';
  }

  return answer;
}



// 수박수박수~
function solution(n) {
 
  let answer = "";
  for(let i = 1; i <= n; i++) {
    i % 2  == 0 ? (answer += "박") : (answer += "수");
  }
      return answer;
  }

// 약수의 합
let answer = 0;
function solution(n) { 
    for(let i = 1; i <= n; i++) {
      if(n % i == 0) {
        answer += i;
  }
}
      return answer;
}




// 자릿수 더하기
function solution(n)
{
    var answer = 0;
    let arr1 = [];

    let str = String(n);
    arr1 = str.split("");

    for(let i = 0; i < arr1.length; i++) {
    answer += Number(arr1[i]);  
}

    return answer;
}


// 없는 숫자 더하기
let arr1 = [];

let numbersAll = [0,1,2,3,4,5,6,7,8,9];
let diffArr = [];
function solution(numbers) {
    diffArr = numbersAll.filter(dif => !numbers.includes(dif));
    for(let i = 0; i < diffArr.length; i++) {
    answer += diffArr[i];
}
    
    return answer;
}

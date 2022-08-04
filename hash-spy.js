/**
 * 프로그래머스
 * 코딩 테스트 고득점 kit
 * 해시 - 위장(https://school.programmers.co.kr/learn/courses/30/lessons/42578)
 */

 function solution(clothes) {
  var answer = 0;
  const m = new Map();
  clothes.forEach((cloth) => {
      const kind = m.get(cloth[1]);
      const num = kind ? kind + 1 : 1;
      m.set(cloth[1], num);
  })
  
  answer = 1;
  m.forEach((num) => {
    // 아무것도 안 뽑는 경우(1) + 1개씩 뽑는 경우(num)
    answer *= 1 + num;
  });
  //최소 하나는 입어야 하기 때문에 아무것도 안 입는 경우는 뺀다
  return answer - 1;
}

const result = solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]);
console.log(result);
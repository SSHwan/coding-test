/**
 * 프로그래머스
 * 코딩 테스트 고득점 kit
 * 해시 - 베스트앨범(https://school.programmers.co.kr/learn/courses/30/lessons/42579)
 */

function solution(genres, plays) {
  var answer = [];
  const totalCount = new Map();
  const m = new Map();
  genres.forEach((genre, i) => {
      const playCount = plays[i];
      
      if (m.has(genre)) {
          totalCount.set(genre, totalCount.get(genre) + playCount);
          
          const other = m.get(genre);
          other.set(i, playCount);
          m.set(genre, other);
      } else {
          totalCount.set(genre, playCount);
          
          const nums = new Map();
          nums.set(i, playCount);
          m.set(genre, nums);
      }
  });
  
  const totalCountArr = Array.from(totalCount);
  totalCountArr.sort((a,b) => b[1] - a[1]);

  totalCountArr.forEach((value) => {
      const genre = value[0];
      const playArr = m.get(genre);
      if (playArr.size > 1) {
          const arr = Array.from(playArr);
          arr.sort((a,b) => {
              if(a === b) {
                  return a[0] - b[0]; 
              }
              return b[1] - a[1];
          });
          answer.push(arr[0][0]);
          answer.push(arr[1][0]);
      } else {
          answer.push(playArr.keys().next().value);
      }
  })
  return answer;
}

const result = solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);
console.log(result);
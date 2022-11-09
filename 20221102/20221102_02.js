// 제로베이스 프론트엔드 스쿨_CountMatchedNumber
/*
[문제 설명]
문자열 s와 숫자 n이 주어집니다.
문자열 s에 등장하는 숫자 n의 수를 출력하는 함수, solution을 완성해주세요.

예를 들어, s '134246'과 n이 4로 주어질 때 결과는 2입니다.

[입력 형식]
- s는 길이가 1 이상 1,000 이하의 문자열입니다.
- s의 요소는 0 부터 9까지의 문자입니다.
- n은 0 이상 9 이하의 자연수입니다.

[출력 형식]
- 문자열 s에 등장하는 숫자 n의 수를 출력합니다.
*/

function solution(s, n) {
  let answer = 0;
  let arr = [...s].map(Number);
  for (let element of arr) {
    if (element === n) answer++;
  }
  return answer;
}

console.log(solution("134246", 4)); // output: 2
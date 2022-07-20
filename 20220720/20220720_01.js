// 제로베이스 프론트엔드 스쿨_StringToAscii
/*
[문제 설명]
문자열 s가 있습니다. 이 문자열의 ASCII Code를 배열로 출력하는 함수, solution을 완성해주세요.

예를 들어, s 'work'가 있을 때, 결과는 [119, 111, 114, 107]입니다.

[입력 형식]
- s는 길이가 100 이하의 문자열입니다.
- s는 대/소문자로 구성되어 있습니다.

[출력 형식]
- 문자열의 ASCII Code 배열을 출력합니다.
*/

function solution(s) {
  var answer = [];

  for (let i of s) {
    answer.push(i.charCodeAt(0));
  }

  return answer;
}

let s = "work";
console.log(solution(s));

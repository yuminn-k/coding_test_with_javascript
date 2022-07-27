// 제로베이스 프론트엔드 스쿨_BinaryDistance
/*
[문제 설명]
0 이상의 정수 n이 주어질 때, n의 이진 표현에서 인접한 두 1 사이의 가장 긴 거리를 출력하는 함수, solution을 완성해주세요.

예를 들어, n이 주어질 때의 결과는 다음과 같습니다.

n : 5
n의 이진 표현 : 101
결과 : 2

n : 11
n의 이진 표현 : 1011
결과 : 2

[입력 형식]

n은 0 이상 109 이하의 정수입니다.
[출력 형식]

n의 이진 표현에서 인접한 두 1 사이의 가장 긴 거리를 int 형식으로 출력합니다.
*/

function solution(n) {
  var answer = 0;
  let binary = n.toString(2);

  let length = 0;
  for (let i of binary) {
    if (i == 0) {
      length++;
    } else {
      length++;
      if (answer < length) answer = length;
      length = 0;
    }
  }

  return answer;
}

console.log(solution(11));

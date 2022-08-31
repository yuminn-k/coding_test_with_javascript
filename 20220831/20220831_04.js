// 제로베이스 프론트엔드 스쿨_DisasterAssistanceAmount
/*
[문제 설명]
재난 지원금을 지급하기 위해 국민의 평균 소득액을 구하려고 합니다.
국민의 소득을 그대로 평균 내면 잡음이 심하여, 최상위 최하위 1건씩 제외한 소득 평균을 출력하는 함수, solution을 완성해주세요.
예를 들어, 국민의 소득액 arr가 [1, 3, 3, 3, 5]일 때, 최상위 최하위 1건씩 제외한 소득 평균은 3입니다.

[제한 사항]

국민의 소득액 arr는 정렬되어있지 않습니다.
평균의 소수점은 절삭 후 출력합니다.
[입력 형식]

국민의 소득액 정보 arr는 길이가 1 이상 1,000 이하의 배열입니다.
소득액인 arr의 각 요소는 0 이상 1,000,000 이하의 정수입니다.
[출력 형식]

최상위 최하위 1건씩 제외한 소득 평균을 int 형식으로 출력합니다.
*/

function solution(arr) {
  let array = [];
  for (let element of arr) {
    array.push(element);
  }

  array.sort(function(a, b) {
    return a - b;
  })

  let average = 0;
  for (let i = 1 ; i < array.length - 1 ; i++) {
    average += array[i];
  }

  return Math.floor(average / (array.length - 2));
}

console.log(solution([1, 3, 3, 3, 5]));
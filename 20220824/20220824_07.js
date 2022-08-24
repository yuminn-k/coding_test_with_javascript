// 제로베이스 프론트엔드 스쿨_OlympicPlayerNumber
/*
[문제 설명]
2020 도쿄 올림픽에 많은 육상 주자들이 참가했습니다.
각 국가에서 국가 대표 예선전이 진행되었습니다.
선발된 육상 주자들의 번호가 IOC에 전달되고 이를 기준으로 선수선발을 하려고 합니다.
선수 번호를 순서대로 정렬한 뒤에 `n번째` 순서의 선수 번호를 출력하는 함수, solution을 완성해주세요.

[제한 사항]
- 각 배열에 포함된 번호들은 다른 배열의 번호들과 서로 중복될 수 있습니다.
- 각 국가의 총선수들은 100명 이내입니다.
- 각 국가 참가자들의 리스트는 오름차순으로 정렬되어 있습니다.
- 전체 참가 국가들의 선수들의 순서도 오름차순으로 되어있습니다.
- 전체 참가 국가와 각 국가의 선수들의 숫자는 같습니다. (m * m)

[입력 형식]
- 참가국별 참가 선수 번호 arr는 m * m 길이의 숫자 배열입니다.
- n번째 순서를 나타내는 num은 1 이상 100 이하의 정수입니다.

[출력 형식]
- n번째 순서의 선수 번호를 int 형식으로 출력합니다.
*/

function solution(arr, Num) {
  let result;

  let array = [];

  for (let element of arr) {
    for (let e of element) {
      array.push(e);
    }
  }

  array.sort(function(a, b) {
    return a - b;
  })

  result = array[Num - 1];

  return result;
}

console.log(solution([[1, 2, 22], [3, 4, 23], [8, 9, 33]], 7));
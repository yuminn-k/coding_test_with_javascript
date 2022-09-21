// 제로베이스 프론트엔드 스쿨_Pare
/*
[문제 설명]
민규와 지수는 구슬 맞추기 게임을 하려고 합니다. 게임의 방식은 숫자가 적힌 구슬이 한 쌍씩 들어있는 주머니가 있고, 술래는 주머니에서 상대가 알지 못하게 하나의 구슬을 빼내거나, 빼내지 않습니다.

그런 후 상대는 술래가 주머니에서 구슬을 빼냈는지 빼내지 않았는지, 그리고 술래가 구슬을 빼냈다면 빼낸 구슬의 숫자를 맞추는 게임입니다.

주머니 안에 들어있는 구슬에 적힌 숫자 배열 arr가 주어질 때, 술래가 빼낸 구슬의 번호를 출력하는 함수, solution을 완성해주세요.

[제한 사항]

구슬에 적힌 숫자는 1 이상 100,000 이하의 정수입니다.
술래는 주머니에서 구슬을 한 개만 빼거나, 빼지 않을 수 있습니다.
[입력 형식]

술래의 차례가 지난 후, 주머니에 남은 구슬에 적힌 번호의 배열 arr가 주어집니다.
arr는 길이가 1 이상 10,000 이하의 배열입니다.
[출력 형식]

술래가 가져간 구슬의 번호를 int 형식으로 출력합니다.
술래가 구슬을 가져가지 않았다면, 0을 출력합니다.
*/

function solution(arr) {
  let array = [...arr];
  let include = [];

  for (let i = 0 ; i < array.length ; i++) {
    if (include.includes(array[i])) {
      for (let j = 0 ; j < include.length ; j++) {
        if (array[i] === include[j]) {
          include.splice(j, 1);
          break;
        }
      }
    } else {
      include.push(array[i]);
    }
  }

  if (include.length === 0) return 0;
  return include[0];
}

console.log(solution([1, 2, 1]));
// 제로베이스 프론트엔드 스쿨_LeastSumOfKing
/*
[문제 설명]
숫자 나라 백성들이 있습니다. 백성들은 총 K * N명이고, K개의 나라에 무작위로 소속됩니다.
각 나라의 가장 큰 숫자가 왕이 됩니다. 중복된 가장 큰 수가 존재할 때 왕은 둘 중 무작위로 배정됩니다.
이렇게 구한 왕들의 합의 최솟값을 구하는 함수, solution을 완성해주세요.

예를 들어, arr [6, 2, 1, 4]와 K가 2로 주어질 때, 왕의 합의 최솟값은 8입니다.

그룹이 (1, 6), (2, 4)일 때, 왕은 6, 4로 합은 10입니다.
그룹이 (1, 4), (2, 6)일 때, 왕은 4, 6으로 합은 10입니다.
그룹이 (1, 2), (4, 6)일 때, 왕은 2, 6으로 합은 8입니다.
왕의 합 중 최솟값은 8입니다.

[입력 형식]

숫자 나라 백성 arr는 길이가 K 이상 K * N 이하인 배열입니다.
N은 1 이상 100 이하의 정수입니다.
K는 1 이상 10 이하의 정수입니다.
arr의 원소는 0 이상 1,000 이하의 정수입니다.
[출력 형식]

왕의 합의 최솟값을 int 형식으로 출력합니다.
*/

function solution(arr, K) {
  let result = 0;

  let array = new Array();
  for (let element of arr) {
    array.push(element);
  }

  array.sort(function(a, b) {
    return a - b;
  })

  let tmp = 1;
  for (let i = 0 ; i < array.length ; i++, tmp++) {
    if(tmp % K == 0) result += array[i];
  }

  return result;
}

console.log(solution([6, 2, 1, 4], 2));
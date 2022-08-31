// 제로베이스 프론트엔드 스쿨_CountContinuousBinary
/*
[문제 설명]
바이너리 값을 줍니다.
이때, 바이너리 값 중 연속된 1의 최대 길이를 구하는 함수, solution을 완성해주세요.

예를 들어 바이너리 값 arr [1, 0, 1, 1, 1, 0] 이 주어질 때, 결과는 3입니다.

[입력 형식]

arr는 길이가 1 이상 1,000 이하인 배열입니다.
arr의 요소는 0, 1로 구성되어 있습니다.
[출력 형식]

바이너리 값의 연속된 1의 최대 길이를 int 형식으로 출력하세요.
*/

function solution(arr) {
  let array = [];
  for (let element of arr) {
    array.push(element);
  }

  let length = 0;
  let tmp = 0;
  let bool = false;

  for (let i = 0 ; i < array.length ; i++) {
    if (array[i] === 1) {
      if (bool) {
        tmp++;
      } else {
        bool = true;
        tmp++;
      }
    } else {
      bool = false;

      if (tmp != 0) {
        if (length < tmp) {
          length = tmp;
        }
      }

      tmp = 0;
    }

    if (i === array.length - 1) {
      if (tmp != 0 && tmp > length) {
        length = tmp;
      }
    }
  }

  return length;
}

console.log(solution([1, 0, 1, 1, 1, 0]));
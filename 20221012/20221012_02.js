// 제로베이스 프론트엔드 스쿨_Remodeling
/*
[문제 설명]

높은 건물이 많은 상상의 섬 "ZERO"의 주민들은 모든 건물을 철거하기로 마음먹었지만,

생각보다 많은 돈이 드는 관계로 기존의 건물에서 리모델링하여 증축 혹은 리모델링하는 방식으로 바꾸려합니다.

건물 높이를 1만큼 늘리면 철거하는 비용이 소모되지 않으며 높이당 1의 비용이 소모됩니다

또한 건물 높이를 1만큼 줄이면 철거하는 비용 + 다시 짓는 비용이 높이당 1씩 소모됩니다.

건물은 모두 공사를 해야하기 때문에 높이가 같은 경우는 없습니다.

저희의 목표는 모든 건물을 원하는 높이만큼 증축 혹은 철거하면 얼마의 비용이 소모될지 예측하는 것입니다.

예를 들어, 현재의 높이 now = [1, 2, 3, 4, 5] 이고 목표하는 높이 tobe = [6, 5, 4, 2, 0] 일 경우,

1 -> 6 이 될 때 5만큼의 비용이,

2 -> 5 가 될 때 3만큼의 비용이,

3 -> 4 가 될 때 1만큼의 비용이,

4 -> 2 가 될 때 4 + 2 만큼의 비용이,

5 -> 0 이 될 때 5 + 0 만큼의 비용이 소모되게 되어 결론적으로 20 만큼의 비용이 청구됩니다.

[제한 사항]

- 건물 높이의 최대값은 10000입니다.

- "ZERO" 섬에 있는 건물은 1개 이상입니다.

- now와 tobe에는 음수가 존재하지 않습니다.

- 원래 건물의 높이와 증축 혹은 리모델링 후의 높이는 같을 수 없습니다.

[입력 형식]

- "now" 배열과 "tobe" 배열이 주어집니다.

[출력 형식]

- 모든 건물을 원하는 높이만큼 증축 혹은 리모델링했을 때 소모된 비용을 반환합니다.
*/

function solution(now, tobe) {
  let answer = 0;

  let arr1 = [...now];
  let arr2 = [...tobe];

  for (let i = 0 ; i < arr1.length ; i++) {
    if (arr1[i] > arr2[i]) {  // 철거
      answer += arr1[i] + arr2[i];
    } else {  // 증축
      answer += arr2[i] - arr1[i];
    }
  }

  return answer;
}

console.log(solution([3, 3, 3], [5, 2, 1]));
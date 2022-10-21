// 제로베이스 프론트엔드 스쿨_Police
/*
[문제 설명]

제로마을에는 경찰은 한 명뿐이고, 도둑이 K명 있습니다.

도둑은 공항에 도착하면 비행기를 타고 도망칠 수 있는데, 공항의 위치는 N에 있고 경찰은 현재 0의 위치에 있습니다. 모든 도둑들은 하나의 직선 상에 존재하고 경찰의 우측과 공항의 좌측편에 위치할 수 있습니다. 또한 하나의 위치에 여러 도둑이 존재할 수 있습니다.

1시간이 지날때마다, 도둑과 경찰은 움직이는데 먼저 도둑 한 명이 1시간마다 오른쪽으로 한 칸씩 움직일 수 있습니다. 만약 도둑이 오른쪽으로 움직였을 때, 그 위치가 공항인 경우 도둑은 도망갈 수 있습니다.

한 명의 도둑이 움직이고 나서, 경찰이 움직일 수 있는데 경찰 역시 1시간마다 오른쪽으로 한 칸씩 움직입니다.

이때 경찰의 위치에 있는 도둑은 몇 명이든 체포됩니다. 이 시간들은 경찰이 공항에 도착하면 끝이 나게 되고, 경찰이 공항에 도착할 때까지 최대한으로 도망칠 수 있는 도둑은 몇 명인지 반환해주세요.

[제한 사항]

- 공항의 위치는 2 이상 100000 이하에 있습니다.

- 도둑은 1명 이상 1000명 이하입니다.

[입력 형식]

- 공항의 위치 N과 도둑의 수 K 그리고, 도둑의 위치 thieves가 배열으로 주어집니다.

[출력 형식]

- 경찰이 공항의 위치 N에 올 때까지 탈출한 도둑의 최댓값을 반환해주세요.
*/

function solution(n, k, thieves) {
  let answer = 0;

  let arr = [...thieves];
  arr.sort(function (a, b) {
    return b - a;
  });

  let airport = n;
  let standard = k;

  for (let element of arr) {
    if ((standard - (airport - element)) >= 0) answer++;
    standard -= airport - element;
  }  

  return answer;
}

console.log(solution(10, 6, [8, 7, 5, 4, 9, 4]));
// 제로베이스 프론트엔드 스쿨_SidewalkBlock
/*
[문제 설명]
보도블록을 새로 설치하려고 합니다. 보도블록 타일 1개의 크기는 가로 세로가 1인 정사각형 모양입니다.
이 보도블록 타일을 지그재그로 엇갈려서 설치한다고 할 때, 보도블록 설치에 드는 최소 비용을 구하는 함수 solution을 완성해주세요.

예를 들어 가로 넓이인 w가 3이고, 세로 길이 h가 5일 때, 보도블록 설치에 드는 최소 비용은 7,600원입니다.

첫 번째 w에, 보도블록 5개
두 번째 w에, 보도블록 4개 + 반쪽 보도블록 2개
세 번째 w에, 보도블록 5개
총 보도블록 14개 + 반쪽 보도블록 2개 = (14 * 500) + (2 * 300) = 7,600원

[제한 사항]

보도블록 타일 1개의 가격은 500원이고, 절반 짜리 가격은 300원입니다.
[입력 형식]

가로 넓이 w는 1 이상 100 이하의 정수입니다.
세로 길이 h는 1 이상 100 이하의 정수입니다.
[출력 형식]

보도블록 설치에 드는 최소 비용을 int 형식으로 구합니다.
*/

function solution(w, h) {
  let one = 0;
  let half = 0;

  for (let i = 0 ; i < w ; i++) {
    if (i % 2 === 0) {
      one += h;
    } else {
      one += h - 1;
      half += 2;
    }
  }

  return (500 * one + 300 * half);
}

console.log(solution(3, 5));
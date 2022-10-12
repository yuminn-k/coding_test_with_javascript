// 제로베이스 프론트엔드 스쿨_Keys
/*
[문제 설명]

저희는 던전을 탐험하던 중에 빨간색, 노란색 등 색으로 칠해진 잠겨진 문들을 만났습니다.

다행히 지금까지 던전을 탐험해오면서 열쇠들을 습득했는데, 열쇠들도 색이 칠해져 있습니다.

그래서 저희 앞에 놓인 문들과 가장 나중에 획득한 열쇠들이 순서가 맞게 매칭된다면 던전을 탈출할 수 있습니다.

열쇠들은 알파벳 소문자로 이루어져 있고, 매칭되는 문들은 알파벳 대문자로 이루어져 있습니다.

예를 들어 열쇠의 획득 순서는 ‘bgr’, 앞에 놓인 문들은 ‘RGB’라고
했을 때, r열쇠와 R문이 매칭되어 열 수 있고, g열쇠와 G문을 매칭하여 열 수 있고 마지막으로 b열쇠와 B문을 매칭하여 탈출할 수 있습니다.

이 때, 던전을 탈출할 수 있다면 YES를 출력하고 탈출할 수 없다면 NO를 출력해주세요.

[제한 사항]

- 열쇠들은 중복이 없는 알파벳 소문자로 이루어진 1글자입니다.

- 문들은 중복이 없는 알파벳 대문자로 이루어진 1글자입니다.

- 열쇠와 문의 개수는 항상 같습니다.

[입력 형식]

- 열쇠의 획득 순서 ‘keys’와 앞에 놓인 문들의 순서인 ‘doors’가 주어집니다.

[출력 형식]

- 탈출이 가능하다면 YES, 가능하지 않다면 NO를 출력해주세요
*/

function solution(keys, doors) {
  let answer = 'YES';

  let arr1 = [...keys];
  for (let i = 0 ; i < arr1.length ; i++) {
    arr1[i] = arr1[i].toUpperCase();
  }
  let arr2 = [...doors];
  let index = arr2.length - 1;

  for (let i = 0 ; i < arr1.length ; i++, index--) {
    if (arr1[i] == arr2[index]) continue;
    else {
      answer = "NO";
      break;
    }
  }

  return answer;
}

console.log(solution("rgb", "RGB"));
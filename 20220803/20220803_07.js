// 제로베이스 프론트엔드 스쿨_CountMatchedPrefixWord
/*
[문제 설명]
문자열 배열 array와 문자열 p가 주어집니다. 이때, array의 요소 중 p를 접두사로 갖는 단어의 수를 출력하는 함수, solution을 완성해주세요.

예를 들어, array가 ['apple', 'banana', 'kakao', 'naver', 'apache']이고, p가 'a' 일 때 다음과 같습니다.
- 'apple'은 'a'를 접두사로 갖습니다.
- 'apache'는 'a'를 접두사로 갖습니다.

결과는 2입니다.

[입력 형식]
- array는 길이가 100 이하의 배열입니다.
- array는 길이가 100 이하의 문자열로 이루어져 있습니다.
- p는 길이가 100 이하의 문자열입니다.

[출력 형식]
- p를 접두사로 갖는 array 요소 개수를 출력합니다.
*/

function solution(array, p) {
  var answer = 0;

  let arrays = [];
  for (let element of array) {
    arrays.push(element);
  }

  let compare = [];
  for (let element of p) {
    compare.push(element);
  }

  let tmp = 0;

  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      if (arrays[i].charAt(j) == compare[tmp]) {
        tmp++;
      } else {
        tmp = 0;
        break;
      }

      if (tmp == compare.length) {
        tmp = 0;
        answer++;
      }
    }
  }

  return answer;
}

let array = ["apple", "banana", "kakao", "naver", "apache"];
let p = "a";

console.log(solution(array, p));

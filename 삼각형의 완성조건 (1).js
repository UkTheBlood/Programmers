function solution(sides) {
    var answer = 0;
    let max = sides.reduce((a, b) => Math.max(a, b))
    let sortArr = sides.sort((a, b) => a - b);
    if (max < sortArr[0] + sortArr[1]) {
      answer = 1;
    } else {
      answer = 2;
    }
    return answer;
  }
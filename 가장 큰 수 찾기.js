function solution(array) {
  var answer = [];
  let n = 0;
  array.map((v, i) => {
    if (n < v) {
      n = v;
      answer = [v, i];
    }
  });
  return answer;
}
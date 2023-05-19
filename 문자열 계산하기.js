function solution(my_string) {
  let stringArr = my_string.split(" ");
  var answer = Number(stringArr[0]);
  stringArr.forEach((v, i) => {
    if (v === "+") {
      answer += Number(stringArr[i + 1]);
    }
    if (v === "-") {
      answer -= Number(stringArr[i + 1]);
    }
  });
  return answer;
}

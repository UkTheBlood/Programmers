function solution(my_string) {
  var answer = [];
  const regex = /^[0-9]+$/;
  for (let i = 0; i < my_string.length; i++) {
    if (regex.test(my_string[i])) {
      answer.push(Number(my_string[i]));
    }
  }
  return answer.sort((a, b) => a - b);
}

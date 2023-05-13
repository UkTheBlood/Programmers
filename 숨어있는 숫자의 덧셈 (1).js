function solution(my_string) {
  var answer = 0;
  const regex = /^[0-9]+$/;
  for (let i = 0; i < my_string.length; i++) {
    if (regex.test(my_string[i])) {
      answer += Number(my_string[i]);
    }
  }
  return answer;
}

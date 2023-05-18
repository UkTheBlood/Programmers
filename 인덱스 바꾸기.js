function solution(my_string, num1, num2) {
  var answer = "";
  let arr = my_string.split("");
  for (let i = 0; i < my_string.length; i++) {
    if (i === num1) {
      answer += arr[num2];
    } else if (i === num2) {
      answer += arr[num1];
    } else {
      answer += arr[i];
    }
  }
  return answer;
}

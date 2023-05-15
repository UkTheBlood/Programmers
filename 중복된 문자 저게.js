function solution(my_string) {
  var answer = "";
  answer = my_string.split("").filter((v, i) => my_string.indexOf(v) === i).join("");
  return answer;
}
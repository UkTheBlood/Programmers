function solution(my_string) {
  var answer = "";
  let Arr = my_string.split("");
  for (let i = 0; i < Arr.length; i++) {
    if (Arr[i].match(new RegExp(/^[A-Z]/)) !== null) {
      answer += my_string[i].toLowerCase();
    }
    if (Arr[i].match(new RegExp(/^[a-z]/)) !== null) {
      answer += my_string[i].toUpperCase();
    }
  }
  return answer;
}
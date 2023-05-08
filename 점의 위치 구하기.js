function solution(dot) {
  var answer = 0;

  isPositive= function(num) {
    return num >= 0;
  }

  if(isPositive(dot[0]) === true && isPositive(dot[1]) === true) {answer = 1}
  if(isPositive(dot[0]) === false && isPositive(dot[1]) === true) {answer = 2}
  if(isPositive(dot[0]) === false && isPositive(dot[1]) === false) {answer = 3}
  if(isPositive(dot[0]) === true && isPositive(dot[1]) === false) {answer = 4}

  return answer;
}

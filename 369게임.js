function solution(order) {
  var answer = 0;
  let str = String(order);
  let arr = [...str];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "3" || arr[i] === "6" || arr[i] === "9") {
      answer += 1;
    }
  }
  return answer;
}

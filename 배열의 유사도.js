function solution(s1, s2) {
  var answer = 0;
  for (let i = 0; i < s2.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        answer += 1;
      }
    }
  }
  return answer;
}

function solution2(s1, s2) {
  const intersection = s1.filter((x) => s2.includes(x));
  return intersection.length;
}

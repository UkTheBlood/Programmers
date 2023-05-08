function solution(balls, share) {
  var answer = 0;

  function factorial(n) {
    var result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  let denominator = factorial(balls);
  let molecule = factorial(balls - share) * factorial(share);

  answer = Math.round(denominator / molecule);

  return answer;
}

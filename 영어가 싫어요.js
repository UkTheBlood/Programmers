function solution(numbers) {
  var answer = 0;
  const strArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  strArr.forEach((v, i) => {
    numbers = numbers.split(v).join(i)
  })

  return Number(numbers);
}

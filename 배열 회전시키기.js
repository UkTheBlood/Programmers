function solution(numbers, direction) {
  if (direction === "left") {
    let left = "";
    left = numbers.shift();
    numbers.push(left)
  } else {
    let right = ""
    right = numbers.pop()
    numbers.unshift(right)
  }
  return numbers;
}

console.log(solution([1,2,3], "right"))
function solution(array, n) {
  let ans =[]
  array.forEach((i) => {
    ans.push(Math.abs(i - n))
  });

  const min = Math.min(...ans)
  let check =[];
  for(let i = 0; i < ans.length; i++) {
    if(ans[i] === min) {
        check.push(array[i])
    }
  }

  return Math.min(...check);
}
function solution(s) {
  var answer = "";
  const alphabetArr = [];
  let arr = s.split("");
  arr.sort()
    for (let i = 97; i <= 122; i++) {
      alphabetArr.push(String.fromCharCode(i));
    }
    for(let i = 0; i < s.length; i++) {

    }
  return arr;
}

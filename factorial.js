function solution(n) {
    let ifac = 1;
    for (i = 1; i <= n; i++) {
      ifac *= i;
      if (ifac > n) {
        break;
      }
    }
    return i - 1;
  }
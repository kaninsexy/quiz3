function squareRoot(num) {
  let total = num;
  function is_prime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  const result = [];
  for (let i = 2; i <= num; i++) {
    while (is_prime(i) && num % i === 0) {
      if (!result.includes(i)) result.push(i);
      num /= i;
    }
  }
  let square = 1;
  let root = 1;

  for (let i = 0; i < result.length; i++) {
    while (Number.isInteger(total / result[i] ** 2)) {
      square *= result[i];
      total = total / result[i] ** 2;
    }
  }

  console.log(`${square} ${total == 1 ? '' : `root ${total}`} `);
}

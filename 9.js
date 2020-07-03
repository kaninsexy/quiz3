function maxPossibleNumber(Number) {
  num = String(Number).split('').sort().reverse().join('');
  return num;
}

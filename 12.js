function maxPairSum(array) {
  let sortarray = array.sort((a, b) => b - a);
  let sum = sortarray[0] + sortarray[1];
  console.log(sum);
}

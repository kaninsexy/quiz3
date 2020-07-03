function minPairSum(array) {
  let sortarray = array.sort((a, b) => a - b);
  let sum = sortarray[0] + sortarray[1];
  console.log(sum);
}

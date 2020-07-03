function dotProduct(vector1, vector2) {
  let sum = 0;
  for (
    let i = 0;
    i < (vector1.length > vector2.length ? vector1.length : vector2.length);
    i++
  ) {
    vector1[i] === undefined
      ? (sum += 0 * vector2[i])
      : vector2[i] === undefined
      ? (sum += vector1[i] * 0)
      : (sum += vector1[i] * vector2[i]);
  }
  console.log(sum);
}

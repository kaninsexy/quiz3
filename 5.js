function changeStringtoThaiDate(word) {
  let day = Number(word.split('-')[0]);
  let month = Number(word.split('-')[1]);
  let year = Number(word.split('-')[2]);
  let date = new Date();
  if (month > 13 || (day > 29 && month == 2)) {
    console.log('invalid');
  } else {
    date.setFullYear(year + 543, month - 1, day);
  }
}

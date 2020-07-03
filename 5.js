function changeStringtoThaiDate(word) {
  let day = Number(word.split('-')[0]);
  let month = Number(word.split('-')[1]);
  let year = Number(word.split('-')[2]);
  let date = new Date();
  let testDate = `${month}-${day}-${year}`;
  date = date.setFullYear(year + 543, month - 1, day);
  Date.parse(testDate) === NaN ? console.log('invalid') : console.log(date);
}

function changeStringtoThaiDate(word) {
  let day = Number(word.split('-')[0]);
  let month = Number(word.split('-')[1]);
  let year = Number(word.split('-')[2]);
  let date = new Date();
  let testDate = `${month}-${day}-${year}`;
  date = date.setFullYear(year + 543, month - 1, day);
  switch (month) {
    case 1:
      'มกราคม';
      break;
    case 2:
      'กุมภาพันธ์';
      break;
    case 3:
      'มีนาคม';
      break;
    case 4:
      'เมษายน';
      break;
    case 5:
      'พฤษภาคม';
      break;
    case 6:
      'มิถุนายน';
      break;
    case 7:
      'กรกฎาคม';
      break;
    case 8:
      'สิงหาคม';
      break;
    case 9:
      'กันยายน';
      break;
    case 10:
      'ตุลาคม';
      break;
    case 11:
      'พฤศจิกายน';
      break;
    case 12:
      'ธันวาคม';
      break;

    default:
      break;
  }
  Date.parse(testDate) === NaN
    ? console.log('invalid')
    : console.log(`${day} ${month} ${year}`);
}

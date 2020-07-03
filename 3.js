function thaiTypeof(word) {
  if (typeof word === 'string') {
    console.log('ข้อความ');
  }
  if (typeof word == 'number') {
    console.log('ตัวเลข');
  }

  if (typeof word === 'object') {
    console.log('ออปเจ็คต์');
  }
}

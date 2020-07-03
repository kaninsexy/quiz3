let word = prompt();
if (word === word.toUpperCase()) {
  word = 'All character are capital.';
} else if (word === word.toLowerCase()) {
  word = 'All character are small.';
} else {
  word = '“All character are mix';
}
console.log(word);

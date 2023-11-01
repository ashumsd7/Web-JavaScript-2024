function charCount(str) {
  let res = {};
  for (char of str) {
    let updatedChar= char.toLowerCase();
    if (isAlphanumeric(updatedChar)) {
      if (res[updatedChar]) {
        res[updatedChar] = ++res[updatedChar];
      } else {
        res[updatedChar] = 1;
      }
    }
    console.log("char", updatedChar);
  }

  console.log('res',res)
}

function isAlphanumeric(str) {
  return str.match(/^[a-zA-Z0-9]+$/) !== null;
}

charCount("aaaaaaaaaaaaaaa");

const repeatString = function (word, num) {
  result = "";
  if (num >= 0) {
      for (let i = 0; i < num; i++) {
        for (const letter of word) {
          result += letter;
        }
      }
  } else {
    result = "ERROR"
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;

const reverseString = function (array) {
  let result = ``;
  for (let index = array.length; index > 0; index--) {
    result += array[index - 1];
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;

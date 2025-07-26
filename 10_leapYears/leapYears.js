function leapYears(year) {
  if (year % 400 === 0) {
    return true; // divisible by 400: leap year
  }
  if (year % 100 === 0) {
    return false; // divisible by 100 but not 400: not a leap year
  }
  if (year % 4 === 0) {
    return true; // divisible by 4: leap year
  }
  return false; // not divisible by 4: not a leap year
}


// Do not edit below this line
module.exports = leapYears;

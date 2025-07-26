function sumAll(start, end) {
  // Error handling upfront
  if (
    typeof start !== "number" ||
    typeof end !== "number" ||
    start < 0 ||
    end < 0 ||
    !Number.isInteger(start) ||
    !Number.isInteger(end)
  ) {
    return "ERROR";
  }

  // Ensure start is less than end
  const min = Math.min(start, end);
  const max = Math.max(start, end);

  let total = 0;
  for (let i = min; i <= max; i++) {
    total += i;
  }

  return total;
}

// Do not edit below this line
module.exports = sumAll;

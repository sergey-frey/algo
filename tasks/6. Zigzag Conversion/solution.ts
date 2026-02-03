function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }

  const res: string[] = [];

  for (let i = 0; i < numRows; ++i) {
    let indexDiff = (numRows - (i % (numRows - 1))) * 2 - 2;

    let j = i;
    let iterationsCount = 0;

    while (j < s.length) {
      res.push(s[j]);

      if (iterationsCount % 2) {
        j += numRows * 2 - 2 - (indexDiff % (numRows * 2 - 2));
      } else {
        j += indexDiff;
      }

      ++iterationsCount;
    }
  }

  return res.join("");
}

export { convert };

// 0 - numRows * 2 - 2 = 6
// 1 = 4
// 2 - 2
// 3 - 6

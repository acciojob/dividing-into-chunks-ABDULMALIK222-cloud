function divide(arr, n) {
  const result = [];
  let currentChunk = [];
  let currentSum = 0;

  for (let num of arr) {
    if (currentSum + num <= n) {
      currentChunk.push(num);
      currentSum += num;
    } else {
      // Push the current chunk and start a new one
      if (currentChunk.length > 0) {
        result.push(currentChunk);
      }
      currentChunk = [num];
      currentSum = num;
    }
  }

  // Push the last chunk if not empty
  if (currentChunk.length > 0) {
    result.push(currentChunk);
  }

  return result;
}

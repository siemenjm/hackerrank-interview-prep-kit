/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
  // track our elevation
  // increment a valley counter every time we leave a valley
  let valleysTraversed = 0;
  let currentElevation = 0;
  for (let i = 0; i < path.length; i++) {
    if (steps < Math.abs(currentElevation)) {
      return valleysTraversed;
    }

    if (path[i] === 'U' && currentElevation === -1) {
      valleysTraversed++;
      currentElevation++;
    } else if (path[i] === 'U') {
      currentElevation++;
    } else if (path[i] === 'D') {
      currentElevation--;
    }

    steps--;
  }

  return valleysTraversed;
}

console.log(countingValleys(8, ['D', 'D', 'U', 'U', 'U', 'U', 'D', 'D'])); // => 1
console.log(countingValleys(8, ['U', 'D', 'D', 'D', 'U', 'D', 'U', 'U'])); // => 1

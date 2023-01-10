/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
  // let totalBribes = 0;
  // for (let i = 0; i < q.length; i++) {
  //   if (q[i] > i + 1) {
  //     let bribes = q[i] - (i + 1);
  //     if (bribes > 2) {
  //       console.log('Too chaotic');
  //       return;
  //     }

  //     totalBribes += bribes;
  //   }
  // }

  // console.log(totalBribes);
  // return;

  // let totalBribes = 0;
  // for (let i = 0; i < q.length - 1; i++) {
  //   let bribes = 0;
  //   for (let j = i + 1; j < q.length; j++) {
  //     if (q[i] > q[j]) {
  //       bribes++;
  //       if (bribes > 2) {
  //         console.log('Too chaotic');
  //         return;
  //       }
  //     }
  //   }

  //   totalBribes += bribes;
  // }

  // console.log(totalBribes);
  // return;

  let totalBribes = 0;
  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] - i - 1 > 2) {
      console.log('Too chaotic');
      return;
    }

    for (let j = Math.max(0, q[i] - 2); j < i; j++) {
      if (q[j] > q[i]) {
        totalBribes++;
      }
    }
  }

  console.log(totalBribes);
}

console.log(minimumBribes([1, 2, 3, 5, 4, 6, 7, 8])); // => 1
console.log(minimumBribes([4, 1, 2, 3])); // => 'Too chaotic'
console.log(minimumBribes([2, 1, 5, 3, 4])); // => 3
console.log(minimumBribes([2, 5, 1, 3, 4])); // => 'Too chaotic'
console.log(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4])); // => 'Too chaotic'
console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])); // => 7

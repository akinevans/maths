// factor pairs
// a pair of numbers that can be multiplied together to get a certain product
//? Example: 3 and 4 are factor pairs of 12 because 3 * 4 = 12
//? Example: 2 and 6 are also factor pairs of 12 because 2 * 6 = 12

// loop over all whole nums 1 to num
// if num % i === 0. it is a factor
// push into pairs Set

const findFactorPairs = (num) => {
  let pairs = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      pairs.push([i, num / i]);
      pairs.push(' ~ ');
    }
  }
  // remove back half of pairs (reversed duplicates)
  pairs = pairs.slice(0, pairs.length / 2);
  console.log(`Factor Pairs of ${num}: ${[...pairs]}`);
};

// findFactorPairs(14);
// findFactorPairs(24);
// findFactorPairs(55);
// findFactorPairs(56);
// findFactorPairs(78);
// findFactorPairs(120);
findFactorPairs(36);

// factor pairs
// a pair of numbers that can be multiplied to get a certain product
//? Example: 3 and 4 are factor pairs of 12 because 3 * 4 = 12
//? Example: 2 and 6 are also factor pairs of 12 because 2 * 6 = 12

// loop over all whole nums 1 to num
// if num % i === 0. it is a factor
// push into pairs Set
// A set doesn't allow duplicates, so for this case its better than an array

const findFactorPairs = (num) => {
  let pairs = new Set();
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      pairs.add(i);
    }
  }
  console.log(`Factor Pairs of ${num}: ${[...pairs]}`);
};

findFactorPairs(24);
findFactorPairs(55);
findFactorPairs(56);
findFactorPairs(78);
findFactorPairs(120);

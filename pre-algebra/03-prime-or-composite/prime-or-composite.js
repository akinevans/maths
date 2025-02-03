// Is the number prime or composite?

const isPrime = (num) => {
  if (num <= 1) {
    console.log(`${num} is not prime`);
    return;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      console.log('%c ' + num + ' is composite', 'color:red;');

      return;
    }
  }

  console.log('%c ' + num + ' is prime', 'color:green;');
};

for (let i = 0; i < 100; i++) {
  isPrime(i);
}

// isPrime(0);
// isPrime(1);
// isPrime(7);
// isPrime(11);
// isPrime(9);
// isPrime(19);
// isPrime(25);
// isPrime(32);

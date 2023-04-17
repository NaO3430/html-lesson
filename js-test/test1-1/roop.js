const fizz = 3;
const buzz = 5;

for (let i = 1; i <= 99; i++) {
  if (i % fizz === 0 && i % buzz === 0) {
    console.log(`FizzBuzz ${i}`);
  } else if (i % fizz === 0) {
    console.log(`Fizz ${i}`);
  } else if (i % buzz === 0) {
    console.log(`Buzz ${i}`);
  }
}

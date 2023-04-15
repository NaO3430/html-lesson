// １〜９９まで繰り返す
for (let i = 1; i <= 99; i++) {
  // 条件：変数iが３と５で割り切れる場合
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz" + i);
  }
  // 条件分岐：変数iが3で割り切れる場合
  else if (i % 3 === 0) {
    console.log("Fizz" + i);
  }
  // 条件分岐：変数iが5で割り切れる場合
  else if (i % 5 === 0) {
    console.log("Buzz" + i);
  }
}

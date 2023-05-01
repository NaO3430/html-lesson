executionFizzBuzz = () => {
  const fizzNum = document.getElementById('input-fizz').value;
  const buzzNum = document.getElementById('input-buzz').value;
  if (isNaN(fizzNum) || isNaN(buzzNum)) {
    document.getElementById('output').innerHTML = '整数値を入力して下さい';
    return;
  }
  let output = '';
  for (let i = 1; i <= 99; i++) {
    if (i % fizzNum === 0 && i % buzzNum === 0) {
      output += `FizzBuzz ${i}<br>`;
    } else if (i % fizzNum === 0) {
      output += `Fizz ${i}<br>`;
    } else if (i % buzzNum === 0) {
      output += `Buzz ${i}<br>`;
    }
  }
  document.getElementById('output').innerHTML = output;
};

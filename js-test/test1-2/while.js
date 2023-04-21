const answer = '東京';
while (true) {
  const answer = prompt('日本の首都は？');
  if (answer === '東京') {
    alert('正解です!');
    break;
  } else {
    alert('不正解です!');
  }
}

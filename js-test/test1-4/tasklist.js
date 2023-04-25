const borderLine = '='.repeat(24);
const taskListTitle = '現在持っているタスク一覧';
const taskList = [
  { content: '机を片付ける', genre: '掃除' },
  { content: '牛乳を買う', genre: '買い物' },
  { content: '散歩する', genre: '運動' },
];

const showTaskList = () => {
  console.log(borderLine);
  console.log(taskListTitle);
  console.log(borderLine);
  taskList.forEach((task, index) => {
    console.log(`${index} : [内容]${task.content}、[ジャンル]${task.genre}`);
  });
};

showTaskList();

const newTaskContent = prompt('タスクを入力して下さい');
const newTaskGenre = prompt('ジャンルを入力して下さい');
taskList.push({ content: newTaskContent, genre: newTaskGenre });

showTaskList();

alert('新しいタスクが追加されました');

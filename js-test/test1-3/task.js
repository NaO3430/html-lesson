const borderLine = '='.repeat(24);
const taskListTitle = '現在持っているタスク一覧';
const taskList = ['掃除', '買い物', '散歩'];

const showTaskList = () => {
  console.log(borderLine);
  console.log(taskListTitle);
  console.log(borderLine);
  taskList.forEach((task, index) => {
    console.log(`${index} : ${task}`);
  });
};

showTaskList();

const newTask = prompt('新しいタスクを入力して下さい');
taskList.push(newTask);

showTaskList();

alert('新しいタスクが追加されました');

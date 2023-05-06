const tasks = [];

const createStatusBtn = () => {
  const statusBtn = document.createElement('button');
  statusBtn.textContent = '作業中';
  return statusBtn;
};

const createDeleteBtn = () => {
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '削除';
  return deleteBtn;
};

const createTodoList = (name) => {
  const todoListTable = document.getElementById('todo-list');
  const newRow = todoListTable.insertRow();

  const idCell = newRow.insertCell();
  const taskNameCell = newRow.insertCell();
  const statusCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();

  const statusBtn = createStatusBtn();
  const deleteBtn = createDeleteBtn();

  idCell.textContent = tasks.length;
  taskNameCell.textContent = name;
  statusCell.appendChild(statusBtn);
  deleteCell.appendChild(deleteBtn);
};

const addTask = () => {
  const input = document.getElementById('add-task');
  const name = input.value;
  input.value = '';

  tasks.push({ name: name, status: '作業中' });
  createTodoList(name);
};

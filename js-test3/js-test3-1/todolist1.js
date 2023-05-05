const todoList = [];

const addTask = () => {
  const input = document.getElementById('add-task');
  const comment = input.value;
  input.value = '';

  const statusBtn = document.createElement('button');
  statusBtn.textContent = '作業中';

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '削除';

  todoList.push({ comment: comment });

  const todoListTable = document.getElementById('todo-list');
  const newRow = todoListTable.insertRow();

  const idCell = newRow.insertCell();
  const commentCell = newRow.insertCell();
  const statusCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();

  idCell.textContent = todoList.length;
  commentCell.textContent = comment;
  statusCell.appendChild(statusBtn);
  deleteCell.appendChild(deleteBtn);
};

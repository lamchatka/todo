import AddTaskForm from "../components/AddTaskForm"
import SearchTaskForm from "../components/SearchTaskForm"
import TodoInfo from "../components/TodoInfo"
import TodoList from "../components/TodoList"

const Todo = () => {
  const tasks = [
    {id: 'task-1', title: 'Купить молоко', status: false},
    {id: 'task-2', title: 'Погладить кота', status: true},
  ];

  const deleteAllTasks = () => {
    console.log('Удаляем все задачи!');
  }

  const deleteTask = (taskId) => {
    console.log(`Удаляем задачу с id: ${taskId}`);
  }

  const toggleTaskComplete = (taskId, status) => {
    console.log(`Задача ${taskId} ${status ? 'выполнена' : 'не выполнена'}`)
  }

  const filterTasks = (query) => {
    console.log(`Поиск: ${query}`)
  }

  const addTask = () => {
    console.log('Задача добавлена!');
  }

  const doneTasks = tasks.filter(({ status }) => status).length;

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm addTask={addTask}/>
      <SearchTaskForm
        onSearchInput={filterTasks}
      />
      <TodoInfo
        total={tasks.length}
        done={doneTasks}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList
      tasks={tasks}
      onDeleteTaskButtonClick={deleteTask}
      onChangeTaskComplete={toggleTaskComplete}
      />
    </div>
  );
}

export default Todo

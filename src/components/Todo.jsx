import AddTaskForm from "../components/AddTaskForm"
import SearchTaskForm from "../components/SearchTaskForm"
import TodoInfo from "../components/TodoInfo"
import TodoList from "../components/TodoList"

const Todo = () => {
  const tasks = [
    {id: 'task-1', title: 'Купить молоко', status: false},
    {id: 'task-2', title: 'Погладить кота', status: true},
  ];

  const doneTasks = tasks.filter(({ status }) => status).length;
    return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo
        total={tasks.length}
        done={doneTasks}/>
      <TodoList tasks={tasks}/>
    </div>
    );
}

export default Todo

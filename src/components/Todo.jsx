import { useState } from "react"
import AddTaskForm from "../components/AddTaskForm"
import SearchTaskForm from "../components/SearchTaskForm"
import TodoInfo from "../components/TodoInfo"
import TodoList from "../components/TodoList"

const Todo = () => {
  const [tasks, setTasks] = useState([
    {id: 'task-1', title: 'Купить молоко', status: false},
    {id: 'task-2', title: 'Погладить кота', status: true},
  ])

  const [newTaskTitle, setNewTaskTitle] = useState('');

  const deleteAllTasks = () => {
    const isConfirmed = confirm('Are you sure you want to delete all?')

    if (isConfirmed) {
      setTasks([])
    }
  }

  const deleteTask = (taskId) => {
    setTasks(
      tasks.filter((task) => task.id !== taskId)
    )
  }

  const toggleTaskComplete = (taskId, status) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status }
        }

        return task
      })
    )
  }

  const filterTasks = (query) => {
    console.log(`Поиск: ${query}`)
  }

  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        status: false,
      }

      setTasks([...tasks, newTask])
      setNewTaskTitle('');
    }
  }

  const doneTasks = tasks.filter(({ status }) => status).length;

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm
        addTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
      />
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

import { useContext } from "react"
import AddTaskForm from "../components/AddTaskForm"
import SearchTaskForm from "../components/SearchTaskForm"
import TodoInfo from "../components/TodoInfo"
import TodoList from "../components/TodoList"
import Button from "./Button"
import { TasksContext } from "../context/TasksContext"

const Todo = () => {
  const { firstIncompleteTaskRef } = useContext(TasksContext)

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm/>
      <SearchTaskForm/>
      <TodoInfo/>
      <Button onClick={() => firstIncompleteTaskRef.current?.scrollIntoView( { behavior: 'smooth' })}
      >
        Show first incomplete task
      </Button>
      <TodoList/>
    </div>

  );
}

export default Todo

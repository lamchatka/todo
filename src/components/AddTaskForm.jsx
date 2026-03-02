import { useContext } from "react";
import Button from "../components/Button";
import Field from "../components/Field";
import { TasksContext } from "../context/TasksContext";

const AddTaskForm = () => {
  const { addTask, newTaskInputRef, newTaskTitle, setNewTaskTitle } =
    useContext(TasksContext);

  const onSubmit = (event) => {
    event.preventDefault();
    addTask();
  };

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className="todo__field"
        label="New task title"
        id="new-task"
        value={newTaskTitle}
        onInput={(event) => setNewTaskTitle(event.target.value)}
        ref={newTaskInputRef}
      />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default AddTaskForm;

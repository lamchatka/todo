import { useContext, useState } from "react";
import Button from "../components/Button";
import Field from "../components/Field";
import { TasksContext } from "../context/TasksContext";

const AddTaskForm = () => {
  const { addTask, newTaskInputRef, newTaskTitle, setNewTaskTitle } =
    useContext(TasksContext);

  const [error, setError] = useState("");

  const clearNewTaskTitle = newTaskTitle.trim();
  const isEmptyNewTaskTitle = clearNewTaskTitle.length === 0;

  const onSubmit = (event) => {
    event.preventDefault();

    if (!isEmptyNewTaskTitle) {
      addTask(clearNewTaskTitle);
    }
  };

  const handleChangeInputValue = (event) => {
    const { value } = event.target;
    const clearValue = value.trim()
    const hasOnlySpaces = value.length > 0 && clearValue.length === 0

    setNewTaskTitle(value)
    setError( hasOnlySpaces ? 'The task cannot be empty' : '')
  };

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className="todo__field "
        label="New task title"
        id="new-task"
        value={newTaskTitle}
        onInput={handleChangeInputValue}
        ref={newTaskInputRef}
        error={error}
      />
      <Button type="submit" isDisabled={newTaskTitle.trim().length === 0}>
        Add
      </Button>
    </form>
  );
};

export default AddTaskForm;

import Button from "../components/Button"
import Field from "../components/Field"

const AddTaskForm = (props) => {
  const {
    addTask,
    newTaskInputRef,
    newTaskTitle,
    setNewTaskTitle
  } = props;

  const onSubmit = (event) => {
    event.preventDefault();
    addTask();
  }

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

}

export default AddTaskForm

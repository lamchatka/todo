import TodoItem from "../components/TodoItem"

const TodoList = (props) => {
  const {
    tasks = [],
    onDeleteTaskButtonClick,
    onChangeTaskComplete,
  } = props;
  const hasTasks = true;

  if (!hasTasks) {
    return <div className="todo__empty-message"></div>
  }

    return (
        <ul className="todo__list">
          {tasks.map((task) => (
            <TodoItem
              className='todo__item'
              key={task.id}
              onDeleteTaskButtonClick={onDeleteTaskButtonClick}
              onChangeTaskComplete={onChangeTaskComplete}
              {...task}
            />
          ))}
      </ul>
    );

}

export default TodoList

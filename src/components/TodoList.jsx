import TodoItem from "../components/TodoItem"

const TodoList = (props) => {
  const {
    tasks = [],
    firstIncompleteTaskRef,
    firstIncompleteTaskId,
    onDeleteTaskButtonClick,
    onChangeTaskComplete,
    filteredTasks,
  } = props;

  const hasTasks = tasks.length > 0;
  const isEmptyFilteredTasks = filteredTasks?.length === 0;

  if (!hasTasks) {
    return <div className="todo__empty-message">There are no tasks yet</div>
  }

  if (hasTasks && isEmptyFilteredTasks) {
    return <div className="todo__empty-message">Task not found</div>
  }

    return (
        <ul className="todo__list">
          {(filteredTasks ?? tasks).map((task) => (
            <TodoItem
              className='todo__item'
              key={task.id}
              ref={task.id === firstIncompleteTaskId ? firstIncompleteTaskRef : null}
              onDeleteTaskButtonClick={onDeleteTaskButtonClick}
              onChangeTaskComplete={onChangeTaskComplete}
              {...task}
            />
          ))}
      </ul>
    );

}

export default TodoList

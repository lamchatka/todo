import { useState, useEffect, useRef, useCallback, useMemo, createContext } from "react"

export const TasksContext = createContext({})

export const TasksProvider = (props) => {
    const { children } = props
      const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')

    if (savedTasks) {
      return JSON.parse(savedTasks)
    }

    return [
      {id: 'task-1', title: 'Купить молоко', status: false},
      {id: 'task-2', title: 'Погладить кота', status: true},
    ]
  })

  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const newTaskInputRef = useRef(null)
  const firstIncompleteTaskRef = useRef(null)
  const firstIncompleteTaskId = tasks.find(({ status }) => !status)?.id

  const deleteAllTasks = useCallback(() => {
    const isConfirmed = confirm('Are you sure you want to delete all?')

    if (isConfirmed) {
      setTasks([])
    }
  }, [])

  const deleteTask = useCallback((taskId) => {
    setTasks(
      tasks.filter((task) => task.id !== taskId)
    )
  }, [tasks])

  const toggleTaskComplete = useCallback((taskId, status) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status }
        }

        return task
      })
    )
  }, [tasks])

  const addTask = useCallback(() => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        status: false,
      }

      setTasks((prevTasks) => [...prevTasks, newTask])
      setNewTaskTitle('')
      setSearchQuery('')
      newTaskInputRef.current.focus()
    }
  }, [newTaskTitle])

  const filteredTasks = useMemo(() => {
    const clearSearchQuery = searchQuery.trim().toLowerCase()

    return clearSearchQuery.length > 0
    ? tasks.filter(({ title }) => title.toLowerCase().includes(clearSearchQuery))
    : null
  }, [tasks, searchQuery])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    newTaskInputRef.current.focus()
  }, [])

  const renderCount = useRef(0)

  useEffect(() => {
    renderCount.current++
    console.log(`Компонент Todo отрендерился ${renderCount.current} раз(а)`)
  })
    return (
      <TasksContext.Provider
        value={{
          tasks,
          filteredTasks,
          firstIncompleteTaskRef,
          firstIncompleteTaskId,
          deleteTask,
          deleteAllTasks,
          toggleTaskComplete,

          newTaskTitle,
          setNewTaskTitle,
          searchQuery,
          setSearchQuery,
          newTaskInputRef,
          addTask
        }}
      >
        {children}
      </TasksContext.Provider>
    )
}

import { useState, useEffect } from 'react'
import './App.css'
import TaskItem from './components/TaskItem'
import TaskItem2 from './components/TaskItem2'

function App() {
  const [newTask, setNewTask] = useState("")
  const [myTasks, setMyTasks] = useState(() => {
    const saved = localStorage.getItem('myTasks')
    return saved ? JSON.parse(saved) : []
  })
  const [completedTasks, setCompletedTasks] = useState(() => {
    const saved = localStorage.getItem('completedTasks')
    return saved ? JSON.parse(saved) : []
  })

  // Save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('myTasks', JSON.stringify(myTasks))
  }, [myTasks])

  useEffect(() => {
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks))
  }, [completedTasks])

  function handleInput(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() == "") return;
    setMyTasks(prev => [...prev, newTask]);
    setNewTask("");
  }

  function handleKeyDown(e) {
    if (e.key == "Enter") {
      addTask();
    }
  }

  function deleteTask(taskName) {
    let afterDelete = myTasks.filter(x => x != taskName);
    setMyTasks(afterDelete);
  }

  function deleteCompletedTask(taskName) {
    let afterDelete = completedTasks.filter(x => x != taskName);
    setCompletedTasks(afterDelete);
  }

  function completeTask(taskName) {
    let afterComplete = myTasks.filter(x => x == taskName);
    let afterFilter = myTasks.filter(x => x != taskName);
    setMyTasks(afterFilter);
    setCompletedTasks(prev => [...prev, afterComplete[0]]);
  }

  return (
    <div className='main-body d-flex justify-content-center align-items-center'>
      <div className='todolist-main-div'>
        <h3>My To-Do List</h3>
        <div>
          <div className='todo-task-input-div'>
            <div className="form-floating w-75">
              <input type="text" className="form-control" id="floatingInput" placeholder="Enter your todo task" onChange={(e) => { handleInput(e) }} onKeyDown={(e) => { handleKeyDown(e) }} value={newTask} />
              <label htmlFor="floatingInput">To-Do Task</label>
            </div>
            <button className="btn btn-primary" id="add-btn" onClick={() => { addTask() }}>+</button>
          </div>
          <h6>To Be Completed</h6>
          <ul className='tasks-list'>
            {
              myTasks.map((task, index) =>
                <TaskItem taskName={task} key={index} deleteTask={deleteTask} completeTask={completeTask} />
              )
            }
          </ul>
          <h6>Completed Tasks</h6>
          <ul className='tasks-list'>
            {
              completedTasks.map((task, index) =>
                <TaskItem2 taskName={task} key={index} deleteCompletedTask={deleteCompletedTask} />
              )
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App

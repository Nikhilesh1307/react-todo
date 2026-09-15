function TaskItem({taskName,deleteTask,completeTask}){
    return(
      <>
       <li className='task pending d-flex justify-content-between align-items-center'>{taskName}
              <div className="task-btns">
                <button className="btn btn-sm btn-success" onClick={()=>{completeTask(taskName)}}>Complete</button>
                <button className="btn btn-sm btn-danger" onClick={()=>{deleteTask(taskName)}}>Delete</button>
              </div>
       </li>
      </>
    )
}
export default TaskItem;

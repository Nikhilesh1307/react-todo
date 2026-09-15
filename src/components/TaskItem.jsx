function TaskItem({taskName,deleteTask,completeTask}){
    return(
      <>
       <li className='task d-flex justify-content-between'>{taskName}
              <div className="task-btns w-50 d-flex justify-content-end">
                <button className="btn btn-sm btn-success" onClick={()=>{completeTask(taskName)}}>Complete</button>
                <button className="btn btn-sm btn-danger" onClick={()=>{deleteTask(taskName)}}>Delete</button>
              </div>
       </li>
      </>
    )
}
export default TaskItem;

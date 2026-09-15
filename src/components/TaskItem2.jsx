function TaskItem2({taskName,deleteCompletedTask}){
    return(
      <>
       <li className='task completed d-flex justify-content-between align-items-center'>{taskName}
              <div className="task-btns">
                <button className="btn btn-sm btn-danger" onClick={()=>{deleteCompletedTask(taskName)}}>Delete</button>
              </div>
       </li>
      </>
    )
}
export default TaskItem2;

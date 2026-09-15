function TaskItem2({taskName,deleteCompletedTask}){
    return(
      <>
       <li className='task d-flex justify-content-between'>{taskName}
              <div className="task-btns w-50 d-flex justify-content-end">
                <button className="btn btn-sm btn-danger" onClick={()=>{deleteCompletedTask(taskName)}}>Delete</button>
              </div>
       </li>
      </>
    )
}
export default TaskItem2;

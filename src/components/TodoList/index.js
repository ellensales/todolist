import { Task } from "../Task"
import './style.css'

export default function TodoList( props ){
    return(
        <div className = "todo-list">
            {props.tasks.map((task, index) => { return (task && <Task key={index} task={task} index = {index} deleteTask = {props.deleteTask}/>) // returns a Task component for each task
            })}
        </div>
    )
}
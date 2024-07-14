import boxicon from "../../icons/square-svgrepo-com.svg"
import checkicon from "../../icons/square-check-svgrepo-com.svg"
import deleteicon from "../../icons/trash-svgrepo-com.svg"
import { useState } from "react"
import './style.css'

export const Task = ( props )=> {
    const[done, setDone] = useState(false);

    const toggleDone = () => {
        setDone(!done);
    }

    return (    
        <li className = "task">
            <button onClick = {toggleDone}>
                <img src={ done? checkicon : boxicon } alt="checkbox" />   
            </button>
            <div className = {done? "task-text done" : "task-text"}> 
                {props.task}
            </div>
            <button onClick = {(e) => props.deleteTask(props.index)} className="delete-button" > 
                <img src = {deleteicon}/>
            </button>
        </li>
    )
}
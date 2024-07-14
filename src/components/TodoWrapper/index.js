import { TodoForm } from "../TodoForm"
import { useState } from "react"
import TodoList from "../TodoList";
import './style.css';

export const TodoWrapper = ()=> {
    const [tasks, setTasks] = useState([]); // tasks is an array that contains all the tasks 

    const addTask = (newTask) => {
        console.log('addtask called with:', newTask);
        setTasks([...tasks, newTask]);
    } // addTask is a function that adds a new task to the tasks array
    
    const deleteTask = (index) => {
        setTasks(tasks.filter((task, i) => i !== index))
    }

    return (
        <div className="wrapper">
            <TodoForm whenSubmitted = {task => addTask(task)} />
            <TodoList tasks = {tasks} deleteTask = {deleteTask}/>
        </div>
    )
}
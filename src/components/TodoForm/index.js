import './style.css';
import { useState } from 'react';

export const TodoForm = (props)=> {
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.whenSubmitted(newTask);
        setNewTask('');
        e.target.reset();
    }

    return (
        <form onSubmit = {handleSubmit} className="form">
            <input 
                className = "form-input"
                type="text" 
                placeholder="New task..."
                value ={newTask}
                onChange= { e => setNewTask(e.target.value)}
                />
            <button className = "form-button">Add task</button>
        </form>
    )
}
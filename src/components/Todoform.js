import React, { useEffect, useState } from 'react'
import '../asserts/todolist.css';
import {Todolist} from '../components/Todolist';
export const Todoform = () => {
   const [input,setInput] = useState("");
   const [todo,setTodo] = useState([]);

   useEffect(() =>{
       localStorage.setItem("todo",JSON.stringify(todo));
   }, [todo]);

    const handleInputChange = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        setTodo([...todo,{ task:input, completed:false , edit:false}]);
        setInput("");
    }

    return (
        <div>
            <h1>TO DO LIST</h1>
            <form className='todoform' onSubmit={handleSubmit}>
                <input name="task" type="text" className="inputbox" placeholder='Add a new task...' value={input} onChange={handleInputChange} required/>
                <button className="addbutton" >ADD</button>
            </form>
            <Todolist todo={todo} setTodo={setTodo} />
        </div>
    )
}

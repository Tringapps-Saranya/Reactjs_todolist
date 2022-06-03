import React, { useState } from 'react'
import '../asserts/todolist.css';
export const Todolist = ({ todo, Index, setTodo, setEditTodo }) => {

    let [count, setCount] = useState(0);

    const handleDelete = ({ index }) => {
        todo.splice(index, 1);
        setTodo([...todo]);
    };

    const handleEdit = (todo) => {
        todo.edit = !todo.edit;
        setTodo((todo) => [...todo]);
    };

    const handleCheck = (todo) => {
        todo.completed = !todo.completed;
        setTodo((todo) => [...todo]);
        todo.completed === true ? setCount(++count) : setCount(--count);
    };

    function handleUpdate(event, todo) {
        todo.task = event.target.value;
        setTodo((todo) => [...todo]);
    }

    return (
        <div>
            {todo.map((todos, Index) => (
                <div key={Index} className='displaytask'>
                    <div className='display'>
                        <input className='check-box' type="checkbox" onChange={() => handleCheck(todos)} />
                        {todos.completed ? <input type="text" value={todos.task} className='donetask' disabled={todos.completed} />
                            : <input type="text" value={todos.task} className={todos.edit ? 'edit' : 'noedit'} onChange={(event) => handleUpdate(event, todos)} readOnly={!todos.edit} />}
                        <button  disabled={todos.completed} onClick={() => handleDelete(Index)}>X</button>
                        <button  disabled={todos.completed} onClick={() => handleEdit(todos)}>{todos.edit ? 'SAVE' : 'EDIT'}</button>
                    </div>
                </div>
            ))

            }
            <p className='done'>Completed Tasks : {count}</p>

        </div>
    )
}

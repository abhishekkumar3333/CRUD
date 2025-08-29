import React, { useEffect, useState } from 'react'

const SecondTodo = () => {
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        const storeTodo = JSON.parse(localStorage.getItem("todo"));
        if (storeTodo) {
            return setTodo(storeTodo)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todo));
    }, [todo]);

    const handleUpdateEdit = () => {
        if (!input.trim()) return;

        if (editIndex !== null) {
            const updateTodos = todo.map((t, i) => {
                return i === editIndex ? input : t
            });
            setTodo(updateTodos);
            setEditIndex(null);
        } else {
            setTodo([...todo, input]);
        }
        setInput("");
    }

    const handleDelete = (index) => {
        setTodo(todo.filter((_, i) => i !== index))
    };

    const handleEdit = (index) => {
        setInput(todo[index]);
        setEditIndex(index)
    };
    return (
        <>
         <input type="text"
         value={input}
         placeholder='add todo'
         onChange={(e)=>setInput(e.target.value)} />

         <button onClick={handleUpdateEdit}>{editIndex!== null ? "Edit todo" :"add todo"}</button>

         {
            todo.length === 0 ?(
                <p>no todo : ADD todo</p>
            ): (
               todo.map((t,i)=>{
              return(<ul>
                    <li key={i}>
                        <span>{t}</span>
                        <button onClick={()=> handleEdit(i)}>Edit</button>
                        <button onClick={()=> handleDelete(i)}>Delete</button>
                    </li>
                </ul>)  
               })
            )
         }
        </>
    )
}

export default SecondTodo;
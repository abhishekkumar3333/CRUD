import React, { useEffect, useState } from 'react'

const Todo = () => {
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        const storeTodo = JSON.parse(localStorage.getItem("todo"));
           if (storeTodo) setTodo(storeTodo);
    }, []);
    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todo))
    }, [todo]);

    const EditUpdateTodo = () => {
        if (!input.trim()) return;

        if (editIndex !== null) {
            const updateTodo = todo.map((t, i) => {
                return i === editIndex ? input : t
            })
            setTodo(updateTodo);
            setEditIndex(null)
        }
        else {
            setTodo([...todo, input]);
        }
            setInput("")

    };

    const deleteTodo = (index) => {
        setTodo(todo.filter((_, i) => i !== index));
    };

    const updateTodo = (index) => {
        setInput(todo[index]);
        setEditIndex(index);
    }

    return (
        <>
            <input type="text" value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={EditUpdateTodo}>{editIndex !== null ? "Edit Todo" : "Add Todo"}</button>

            {todo.length === 0 ? (
                <p>no todo :ADD todo</p>
            ) : (
                todo.map((t, i) => {
                    return <ul>
                        <li key={i}>
                            <span>{t}</span>
                            <button onClick={() => updateTodo(i)}>Edit</button>
                            <button onClick={() => deleteTodo(i)}>Delete</button>

                        </li>
                    </ul>
                })
            )}
        </>
    )
}

export default Todo
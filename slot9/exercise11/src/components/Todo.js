import { useState } from "react";

export default function Todo(props) {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setTodo([...todo, input]);
      setInput("");
    }
  };
  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, index) => index !== index));
  };
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todo.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

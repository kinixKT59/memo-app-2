import { useState } from "react";

export default function ToDoList({ todos, addTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <div>
      <h3>To-Doリスト</h3>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="To-Doを入力"
      />
      <button onClick={handleAddTodo}>追加</button>
    </div>
  );
}

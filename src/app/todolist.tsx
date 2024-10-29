import { useState } from "react";

interface ToDoListProps {
  todos: string[];
  addTodo: (todo: string) => void;
}


export default function ToDoList({ todos, addTodo }:ToDoListProps) {
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
        {todos.map((todo: string, index: number) => (
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

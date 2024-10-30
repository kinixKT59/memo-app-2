import { useState, useEffect } from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

interface ToDoListProps {
  initialTodos: string[];
  onTodosChange: (todos: string[]) => void;
  
}

export default function ToDoList({initialTodos, onTodosChange }:ToDoListProps) {
  const [todos, setTodos] = useState(initialTodos.map(todo => ({ text: todo, checked: false })));
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;
    const updatedTodos = [...todos, { text: newTodo, checked: false }];
    setTodos(updatedTodos);
    onTodosChange(updatedTodos.map(todo => todo.text)); 
    setNewTodo("");
  };

  const handleToggleCheck = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].checked = !updatedTodos[index].checked;
    setTodos(updatedTodos);
  };

  useEffect(() => {
    setTodos(initialTodos.map(todo => ({ text: todo, checked: false })));
  }, [initialTodos]);


  return (
    <div>
      {todos.length === 0 ? (
        <p>To-Doがありません。</p> 
      ) : (
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((todo, index) => (
          <li key={index} className="memoText">
            <span onClick={() => handleToggleCheck(index)} style={{ cursor: "pointer", marginRight: "8px" }}>
            {todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            </span>
            {todo.text}
          </li>
         ))}
      </ul>
       )}
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

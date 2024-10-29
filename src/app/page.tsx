"use client";
import { useState, useEffect } from "react";
import{ loadMemos, saveMemos } from "./loadMemos";
import ToDoList from "./todolist";

interface Memo {
  text: string;
  hasTodo: boolean;
  todos: string[];
}

export default function Home() {
  const [memos, setMemos] = useState<Memo[]>([
    { text: "サンプルメモ", hasTodo: false, todos: [] }
  ]);
  
  const [newMemo, setNewMemo] = useState<string>("");
  const [isEditing, setIsEditing] = useState<number | null>(null); 
  const [editingText, setEditingText] = useState<string>(""); 

  const handleMemoAdd = () => {
    if (newMemo.trim() === "") return;
    setMemos([...memos, { text: newMemo, hasTodo: false, todos: [] }]);
    setNewMemo("");
  };

  const handleMemoDelete = (index: number) => {
    setMemos(memos.filter((_, i) => i !== index));
  };

  const handleMemoEdit = (index: number) => {
  setIsEditing(index);
  setEditingText(memos[index].text);
  };

  const handleEditSave = (index: number) => {
  const updatedMemos = [...memos];
  updatedMemos[index].text = editingText;
  setMemos(updatedMemos);
  setIsEditing(null);
  setEditingText("");
  };

  const handleTodoListCheck = (index: number) => {
    const updatedMemos = [...memos];
    updatedMemos[index].hasTodo = !updatedMemos[index].hasTodo;
    setMemos(updatedMemos);
  };

  const handleTodoAdd = (index: number, todo: string) => {
    const updatedMemos = [...memos];
    updatedMemos[index].todos.push(todo);
    setMemos(updatedMemos);
  };

  useEffect(() => {
    const savedMemos = loadMemos();
    setMemos(savedMemos);
  }, []);

  useEffect(() => {
    saveMemos (memos);
  }, [memos]);

  return (
    <div>
      <h1>メモ一覧</h1>
      <input
        type="text"
        value={newMemo}
        onChange={(e) => setNewMemo(e.target.value)}
        placeholder="メモを入力"
      />
      <button onClick={handleMemoAdd}>メモを追加</button>
                    
      {memos.length === 0 ? (
        <p>メモがありません。</p>
      ) : (
        <ul>
          {memos.map((memo, index) => (
            <li key={index}>
               <h2>{memo.text}</h2>
             {isEditing === index ? (
                 <div>
                  <input
                 type="text"
                 value={editingText}
                 onChange={(e) => setEditingText(e.target.value)}/>
               <button onClick={() => handleEditSave(index)}>保存</button>
               </div>
               ):(
              <div>
              <button onClick={() =>handleMemoEdit(index)}>編集</button>
              <button onClick={() => handleMemoDelete(index)}>削除</button>
              </div>
             )}

             <button onClick={() => handleTodoListCheck(index)}>
             {memo.hasTodo ? "To-Doを削除" : "To-Doを追加"}
            </button>
            {memo.hasTodo && (
          <ToDoList
            todos={memo.todos}
            addTodo={(todo: string) => handleTodoAdd(index, todo)}
            />
            )}
         </li>
          ))}
        </ul>
      )}
    </div>
  );
}

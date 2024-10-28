"use client";
import { useState, useEffect } from "react";
import{ loadMemos, saveMemos } from "./localStorage";

export default function Home() {
  const [memos, setMemos] = useState([]);
  const [newMemo, setNewMemo] = useState("");
  const [isEditing, setIsEditing] = useState(null); // 編集モードのインデックス
  const [editingText, setEditingText] = useState(""); // 編集中のテキスト

  const handleAddMemo = () => {
    if (newMemo.trim() === "") return;
    setMemos([...memos, newMemo]);
    setNewMemo("");
  };

  const handleDeleteMemo = (index) => {
    setMemos(memos.filter((_, i) => i !== index));
  };

  const handleEditMemo = (index) => {
  setIsEditing(index);
  setEditingText(memos[index]);
  };

  const handleSaveEdit = (index) => {
  const updatedMemos = [...memos];
  updatedMemos[index] = editingText;
  setMemos(updatedMemos);
  setIsEditing(null);
  setEditingText("");
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
      <button onClick={handleAddMemo}>追加</button>
      {memos.length === 0 ? (
        <p>メモがありません。</p>
      ) : (
        <ul>
          {memos.map((memo, index) => (
            <li key={index}>
               {isEditing === index ? (
                 <div><input
                 type="text"
                 value={editingText}
                 onChange={(e) => setEditingText(e.target.value)}/>
               <button onClick={() => handleSaveEdit(index)}>保存</button>
               </div>
               ):(
              <div>
              {memo}
              <button onClick={() =>handleEditMemo(index)}>編集</button>
              <button onClick={() => handleDeleteMemo(index)}>削除</button>
              </div>
             )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

"use client";
import { useState } from "react";

export default function Home() {
  const [memos, setMemos] = useState([]);

  return (
    <div>
      <h1>メモ一覧</h1>
      {memos.length === 0 ? (
        <p>メモがありません。</p>
      ) : (
        <ul>
          {memos.map((memo, index) => (
            <li key={index}>{memo}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

// メモの型定義
interface Memo {
    text: string;
    hasTodo: boolean;
    todos: string[];
  }
  
  export const loadMemos = (): Memo[] => {
    const saved = localStorage.getItem("memos");
    const savedMemos: Memo[] = saved ? JSON.parse(saved) : []; // 型チェックとデフォルト値
    return savedMemos;
  };
  
  export const saveMemos = (memos: Memo[]): void => {
    localStorage.setItem("memos", JSON.stringify(memos));
  };
  
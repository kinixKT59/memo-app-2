
export const loadMemos= () =>{
        const savedMemos = JSON.parse(localStorage.getItem("memos") || "[]");
    return savedMemos;
}

export const saveMemos = (memos) => {
    localStorage.setItem("memos", JSON.stringify(memos));
};
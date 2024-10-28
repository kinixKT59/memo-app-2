
export const loadMemos= () =>{
        const savedMemos = JSON.parse(localStorage.getItem("memos") || "[]");
    return savedMemos;
      
    //   useEffect(() => {
    //     localStorage.setItem("memos", JSON.stringify(memos));
    //   }, [memos]);
}

export const saveMemos = (memos) => {
    localStorage.setItem("memos", JSON.stringify(memos));
};
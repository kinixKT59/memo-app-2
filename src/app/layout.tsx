import React, { ReactNode } from "react"; // ReactNode 型をインポート

interface LayoutProps {
  children: ReactNode; // children の型を定義
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="ja">
      <head>
        <title>Sample Memo App</title>
      </head>
      <body>
        <header style={styles.header}>
          <h1>メモアプリ</h1>
        </header>
        
        <main style={styles.main}>
          {children} {/* 各ページの内容がここに挿入されます */}
        </main>
        
        <footer style={styles.footer}>
          <p>© 2024 メモアプリ</p>
        </footer>
      </body>
    </html>
  );
}

// 各スタイルプロパティの型を定義
const styles: { [key: string]: React.CSSProperties } = {
  header: {
    backgroundColor: "#333",
    color: "white",
    padding: "10px",
    textAlign: "center",
  },
  main: {
    padding: "20px",
    minHeight: "80vh",
  },
  footer: {
    backgroundColor: "#333",
    color: "white",
    padding: "10px",
    textAlign: "center",
  },
};

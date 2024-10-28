// app/layout.js

export default function Layout({ children }) {
  return (
    <html lang="ja">
      <head>
        <title>メモアプリ</title>
      </head>
      <body>
        <header style={styles.header}>
          <h1>メモアプリ</h1>
        </header>
        
        <main style={styles.main}>
          {children} {/* 各ページの内容がここに挿入されます */}
        </main>
        
        <footer style={styles.footer}>
          <p>© 2023 メモアプリ</p>
        </footer>
      </body>
    </html>
  );
}

const styles = {
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


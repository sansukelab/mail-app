import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body style={{ background: "#fff", color: "#000" }}>
        {/* ヘッダー */}
        <header
          style={{
            padding: "20px 24px",
            borderBottom: "1px solid #ddd",
            marginBottom: "40px",
          }}
        >
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h1 style={{ margin: 0, fontSize: "20px" }}>
              <Link
                href="/"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                メール自動生成ツール
              </Link>
            </h1>

            <nav style={{ marginTop: "8px" }}>
              <Link href="/" style={{ marginRight: "16px" }}>
                トップ
              </Link>

            </nav>
          </div>
        </header>

        {/* メインコンテンツ */}
        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
          {children}
        </main>

        {/* フッター */}
        <footer
          style={{
            marginTop: "80px",
            padding: "24px",
            borderTop: "1px solid #ddd",
            textAlign: "center",
            fontSize: "14px",
            color: "#666",
          }}
        >
          <Link href="/about">About</Link> ｜{" "}
          <Link href="/privacy">Privacy Policy</Link> ｜{" "}
          <Link href="/terms">Terms of Service</Link>
        </footer>
      </body>
    </html>
  );
}

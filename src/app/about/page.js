export default function AboutPage() {
  return (
    <div
      style={{
        maxWidth: "720px",
        margin: "0 auto",
        padding: "40px 20px",
        lineHeight: "1.8",
      }}
    >
      <h1 style={{ fontSize: "28px", marginBottom: "24px" }}>
        About
      </h1>

      <p style={{ marginBottom: "16px" }}>
        本サイト「メール自動生成ツール」は、日常業務で利用できる
        ビジネスメールのひな形を、簡単な入力で作成できる無料ツールです。
      </p>

      <p style={{ marginBottom: "16px" }}>
        上司・取引先・お客様向けのメールや、
        依頼・お詫び・お礼・断りといった用途に応じた
        文面作成をサポートすることを目的としています。
      </p>

      <p style={{ marginBottom: "16px" }}>
        本サイトは個人により運営されており、
        内容の改善・機能追加を継続的に行っています。
      </p>

      <p style={{ marginTop: "32px", marginBottom: "8px" }}>
        お問い合わせはこちらまでお願いいたします。
      </p>

      <div
        style={{
          background: "#f5f5f5",
          padding: "12px 16px",
          borderRadius: "6px",
          fontWeight: "bold",
        }}
      >
        sansukelab@gmail.com
      </div>
    </div>
  );
}

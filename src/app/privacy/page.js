export default function PrivacyPage() {
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
        Privacy Policy
      </h1>

      <p style={{ marginBottom: "16px" }}>
        本サイトでは、第三者配信の広告サービス（Google AdSense）を利用する予定です。
        Google などの広告配信事業者は、ユーザーの興味に応じた広告を表示するために
        Cookie を使用することがあります。
      </p>

      <p style={{ marginBottom: "16px" }}>
        Cookie を使用することで、当サイトや他サイトへの過去のアクセス情報に基づいて
        広告が配信されることがあります。
      </p>

      <p style={{ marginBottom: "16px" }}>
        ユーザーは、広告設定でパーソナライズ広告を無効にすることができます。
      </p>

      <p style={{ marginBottom: "16px" }}>
        また、本サイトではアクセス解析のために
        Google Analytics 等のツールを使用する場合があります。
        取得される情報は匿名であり、個人を特定するものではありません。
      </p>

      <p style={{ marginTop: "32px", marginBottom: "8px" }}>
        お問い合わせは以下のメールアドレスまでお願いいたします。
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

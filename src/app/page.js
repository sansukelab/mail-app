"use client";

import { useState } from "react";

export default function Home() {
  const [recipient, setRecipient] = useState("");
  const [mailType, setMailType] = useState("");
  const [points, setPoints] = useState("");
  const [generatedText, setGeneratedText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipient,
        mailType,
        points,
      }),
    });

    if (response.ok) {
      const data = await response.json();
       setGeneratedText(data.result);
    }
  };

  return (
    <main style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>メール自動生成</h1>

      <form onSubmit={handleSubmit}>
        {/* 宛先 */}
        <div>
          <label>宛先</label><br />
          <select
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          >
            <option value="">選択してください</option>
            <option value="上司">上司</option>
            <option value="取引先">取引先</option>
            <option value="お客様">お客様</option>
          </select>
        </div>

        {/* メール種別 */}
        <div style={{ marginTop: "16px" }}>
          <label>メールの種類</label><br />
          <select
            value={mailType}
            onChange={(e) => setMailType(e.target.value)}
          >
            <option value="">選択してください</option>
            <option value="依頼">依頼</option>
            <option value="お詫び">お詫び</option>
            <option value="断り">断り</option>
            <option value="お礼">お礼</option>
          </select>
        </div>

        {/* 要点 */}
        <div style={{ marginTop: "16px" }}>
          <label>伝えたい要点</label><br />
          <textarea
            rows="5"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
            placeholder="箇条書きでもOK"
          />
        </div>

        <button style={{ marginTop: "24px" }}>
          メール生成
        </button>
      </form>

      {/* 生成結果 */}
      {generatedText && (
        <div style={{ marginTop: "40px" }}>
          <h2>生成されたメール</h2>
          <pre style={{ whiteSpace: "pre-wrap" }}>
            {generatedText}
          </pre>
        </div>
      )}
    </main>
  );
}

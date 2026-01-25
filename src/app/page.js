"use client";

import { useState } from "react";
import Script from "next/script";

export default function Home() {
  const [recipient, setRecipient] = useState("");
  const [mailType, setMailType] = useState("");
  const [tone, setTone] = useState("普通");
  const [points, setPoints] = useState("");

  const [subjects, setSubjects] = useState([]);
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!recipient || !mailType) {
      alert("宛先とメール種別を選択してください");
      return;
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        recipient,
        mailType,
        tone,
        points,
      }),
    });

    if (!res.ok) {
      alert("生成に失敗しました");
      return;
    }

    const data = await res.json();
    setSubjects(data.subjects || []);
    setBody(data.body || "");
  };

  return (
    <>
      {/* AdSense script */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3045529469707249"
        crossOrigin="anonymous"
      />

      <main className="min-h-screen bg-gray-50 py-10">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">
            メール自動生成
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* 左：入力フォーム */}
            <div className="lg:sticky lg:top-10 self-start bg-white p-6 rounded-xl shadow">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1">宛先</label>
                  <select
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    className="w-full border rounded-md px-3 py-2"
                  >
                    <option value="">選択してください</option>
                    <option value="上司">上司</option>
                    <option value="先輩">先輩</option>
                    <option value="同僚">同僚</option>
                    <option value="取引先">取引先</option>
                    <option value="お客様">お客様</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    メール種別
                  </label>
                  <select
                    value={mailType}
                    onChange={(e) => setMailType(e.target.value)}
                    className="w-full border rounded-md px-3 py-2"
                  >
                    <option value="">選択してください</option>
                    <option value="依頼">依頼</option>
                    <option value="日程調整">日程調整</option>
                    <option value="お詫び">お詫び</option>
                    <option value="断り">断り</option>
                    <option value="お礼">お礼</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    トーン
                  </label>
                  <select
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                    className="w-full border rounded-md px-3 py-2"
                  >
                    <option>丁寧</option>
                    <option>普通</option>
                    <option>カジュアル</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    要件
                  </label>
                  <textarea
                    rows={5}
                    value={points}
                    onChange={(e) => setPoints(e.target.value)}
                    placeholder="例：〇月〇日 〇時〜 打ち合わせ希望"
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>

                <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700">
                  生成する
                </button>
              </form>
            </div>

            {/* 右：出力エリア */}
            <div className="space-y-8">
              {/* 件名 */}
              <div className="bg-white p-5 rounded-xl shadow min-h-[120px]">
                <h2 className="font-semibold mb-3">件名（コピー可）</h2>

                {subjects.length === 0 ? (
                  <p className="text-sm text-gray-400">
                    ここに件名が表示されます
                  </p>
                ) : (
                  <ul className="space-y-2">
                    {subjects.map((s, i) => (
                      <li
                        key={i}
                        className="flex justify-between items-center border rounded px-3 py-2 text-sm"
                      >
                        <span>{s}</span>
                        <button
                          onClick={() => navigator.clipboard.writeText(s)}
                          className="text-xs bg-gray-200 px-2 py-1 rounded"
                        >
                          コピー
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* 本文 */}
              <div className="bg-white p-5 rounded-xl shadow min-h-[240px]">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="font-semibold">本文</h2>
                  {body && (
                    <button
                      onClick={() => navigator.clipboard.writeText(body)}
                      className="text-xs bg-gray-200 px-2 py-1 rounded"
                    >
                      コピー
                    </button>
                  )}
                </div>

                {body ? (
                  <pre className="whitespace-pre-wrap text-sm leading-relaxed">
                    {body}
                  </pre>
                ) : (
                  <p className="text-sm text-gray-400">
                    ここに本文が表示されます
                  </p>
                )}
              </div>

              {/* AdSense */}
              <div className="bg-white p-4 rounded-xl shadow">
                <ins
                  className="adsbygoogle block"
                  style={{ display: "block" }}
                  data-ad-client="ca-pub-3045529469707249"
                  data-ad-slot="3418339867"
                  data-ad-format="auto"
                  data-full-width-responsive="true"
                />
                <script
                  dangerouslySetInnerHTML={{
                    __html:
                      "(adsbygoogle = window.adsbygoogle || []).push({});",
                  }}
                />
              </div>

              {/* Buy Me a Coffee */}
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <p className="text-sm text-gray-600 mb-3">
                  このツールが役に立った場合、開発継続のサポートをご検討ください。
                </p>
                <a
                  href="https://buymeacoffee.com/sansuke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-400 text-gray-900 font-semibold px-5 py-2 rounded-md hover:bg-yellow-300"
                >
                  Buy Me a Coffee
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

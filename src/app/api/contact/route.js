export async function POST(req) {
  const { recipient, mailType, points } = await req.json();

  let text = "";

  // メール種別ごとの文章テンプレ
  switch (mailType) {
    case "依頼":
      text = `${recipient}様

お世話になっております。

以下の件につき、ご対応をお願いしたく存じます。

${points}

何卒よろしくお願いいたします。`;
      break;

    case "お詫び":
      text = `${recipient}様

お世話になっております。

この度は誠に申し訳ございません。

${points}

深くお詫び申し上げます。`;
      break;

    case "断り":
      text = `${recipient}様

お世話になっております。

誠に恐れ入りますが、以下の件につきまして
今回は対応いたしかねます。

${points}

何卒ご理解のほどお願いいたします。`;
      break;

    case "お礼":
      text = `${recipient}様

お世話になっております。

この度は誠にありがとうございます。

${points}

今後ともよろしくお願いいたします。`;
      break;

    default:
      text = "メール種別が選択されていません。";
  }

  return Response.json({
    result: text,
  });
}

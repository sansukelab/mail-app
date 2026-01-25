export async function POST(req) {
  const { recipient, mailType, tone, points } = await req.json();

  const isInternal = ["上司", "先輩", "同僚"].includes(recipient);
  const suffix = isInternal ? "さん" : "様";

  const opener = isInternal
    ? `お疲れ様です。\n○○です。\n\n`
    : `○○株式会社\n○○部の○○です。\n\n`;

  const toneEnd =
    tone === "カジュアル"
      ? "よろしくお願いします。"
      : "何卒よろしくお願いいたします。";

  const subjects = [
    `【${mailType}の件】ご連絡`,
    `${mailType}につきまして`,
    `${mailType}のお願い`,
  ];

  let bodyMain = "";

  switch (mailType) {
    case "依頼":
      bodyMain = `〇〇の件につきまして、ご相談させていただきたく存じます。\n\n${points}\n\nご多忙のところ恐れ入りますが、ご確認いただけますと幸いです。`;
      break;

    case "日程調整":
      bodyMain = `〇〇の件について、下記日程にてご都合をお伺いできればと存じます。\n\n【候補日】\n・〇月〇日 〇時〜\n・〇月〇日 〇時〜\n\n${points}`;
      break;

    case "お詫び":
      bodyMain = `この度はご迷惑をおかけし、誠に申し訳ございません。\n\n${points}\n\n深くお詫び申し上げます。`;
      break;

    case "断り":
      bodyMain = `誠に恐れ入りますが、検討の結果、今回は見送らせていただく運びとなりました。\n\n${points}\n\n何卒ご理解いただけますと幸いです。`;
      break;

    case "お礼":
      bodyMain = `この度はご対応いただき、誠にありがとうございます。\n\n${points}\n\n心より感謝申し上げます。`;
      break;
  }

  const body = `${recipient}${suffix}\n\n${opener}${bodyMain}\n\n${toneEnd}`;

  return Response.json({
    subjects,
    body,
  });
}

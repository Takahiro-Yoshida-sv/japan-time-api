export default function handler(req, res) {
  const now = new Date();
  const japanTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));

  const iso = japanTime.toISOString();
  const formatted = japanTime.toLocaleString("ja-JP", {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  res.status(200).json({ datetime: iso, formatted });
}

export default async function handler(req, res) {
  try {
    const { text } = req.body;
    const geminiKey = process.env.GEMINI_API_KEY;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text }] }]
        }),
      }
    );

    const data = await response.json();
    res.status(200).json(data);

  } catch (err) {
    console.error("Gemini API error:", err);
    res.status(500).json({ error: "Gemini backend error" });
  }
}

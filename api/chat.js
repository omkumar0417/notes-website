export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (!OPENAI_API_KEY) {
    console.error("❌ Missing OpenAI API Key in environment");
    return res.status(500).json({ error: "API key not configured." });
  }

  console.log("✅ Message received:", message);

  try {
    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      }),
    });

    const data = await openaiRes.json();
    console.log("✅ OpenAI raw response:", data);

    const reply = data.choices?.[0]?.message?.content;
    if (!reply) {
      return res.status(500).json({ error: "No reply from OpenAI" });
    }

    res.status(200).json({ reply });
  } catch (err) {
    console.error("🔥 OpenAI request failed:", err);
    res.status(500).json({ error: "OpenAI request failed" });
  }
}

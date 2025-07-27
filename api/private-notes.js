export default function handler(req, res) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  if (!token || token !== process.env.ACCESS_TOKEN) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const privateNotes = {
    "JavaScript": [
      {
        title: "Async Await",
        date: "2024-06-01",
        tags: ["js", "async"],
        private: true,
        content: "<p>Async/await makes asynchronous code look synchronous.</p>"
      }
    ]
  };

  res.status(200).json(privateNotes);
}

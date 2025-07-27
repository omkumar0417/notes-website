// /api/private-notes.js
export default function handler(req, res) {
  const authHeader = req.headers.authorization;

  if (!authHeader || authHeader !== `Bearer ${process.env.ACCESS_TOKEN}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  res.status(200).json({
    "Java": [
      {
        title: "OOP in Java",
        date: "2025-07-10",
        content: "<p>OOP stands for Object-Oriented Programming.</p>",
        tags: ["java", "oop"],
        private: true
      }
    ],
    "CSS": [
      {
        title: "CSS Grid",
        date: "2025-07-15",
        content: "<p>CSS Grid helps you create complex layouts easily.</p>",
        tags: ["css", "layout"],
        private: true
      }
    ]
  });
}

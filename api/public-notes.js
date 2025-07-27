
export default function handler(req, res) {
  res.status(200).json({
    "Java": [
      {
        title: "Introduction to Java",
        date: "2025-07-01",
        content: "<p>Java is a high-level, object-oriented programming language.</p>",
        tags: ["java", "basics"],
        private: false
      }
    ],
    "HTML": [
      {
        title: "HTML Basics",
        date: "2025-06-25",
        content: "<p>HTML is used to create web pages.</p>",
        tags: ["html", "web"],
        private: false
      }
    ]
  });
}

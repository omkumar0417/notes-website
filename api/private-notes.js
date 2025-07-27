export default function handler(req, res) {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>

  if (token === process.env.ACCESS_TOKEN) {
    const privateNotes = {
      "Java": [
        {
          title: "OOP Concepts",
          date: "2024-07-01",
          tags: ["java", "oops"],
          private: true,
          content: "<p>Java supports Object-Oriented Programming: inheritance, polymorphism, encapsulation, abstraction.</p>"
        }
      ]
    };

    return res.status(200).json(privateNotes);
  } else {
    return res.status(401).json({ error: "Unauthorized" });
  }
}


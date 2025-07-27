export default function handler(req, res) {
  const auth = req.headers.authorization || "";
  const [username, password] = auth.split(":");

  if (
    username === process.env.USERNAME &&
    password === process.env.PASSWORD
  ) {
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

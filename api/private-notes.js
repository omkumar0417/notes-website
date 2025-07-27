export default function handler(req, res) {
  const token = req.headers.authorization?.split(" ")[1];
//   const validToken = "om123access4567"; // Replace with process.env.ACCESS_TOKEN in production
const validToken = process.env.ACCESS_TOKEN;
  if (token === validToken) {
    const privateNotes = {
      "Jaa": [
        {
          title: "OOP Concepts",
          date: "2024-07-01",
          tags: ["java", "oops"],
          private: true,
          content: "<p>Java supports Object-Oriented Programming: inheritance, polymorphism, encapsulation, abstraction.</p>"
        },
        {
          title: "Exception Handling",
          date: "2024-07-10",
          tags: ["java", "exceptions"],
          private: true,
          content: "<p>Java uses try-catch blocks to handle exceptions. Common types: checked, unchecked, and errors.</p>"
        }
      ],
      "DA": [
        {
          title: "Binary Search",
          date: "2024-06-15",
          tags: ["dsa", "algorithms"],
          private: true,
          content: "<p>Binary Search is a fast search algorithm with O(log n) time complexity on sorted arrays.</p>"
        }
      ]
    };

    return res.status(200).json(privateNotes);
  } else {
    return res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
}


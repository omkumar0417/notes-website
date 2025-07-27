export default function handler(req, res) {
  const { username, password } = req.headers;

  if (
    username === process.env.USERNAME &&
    password === process.env.PASSWORD
  ) {
    const privateNotes = {
      "DSA": {
        "Arrays": "Arrays are fixed-size structures storing elements of same type...",
        "Stacks": "LIFO data structure useful in recursion, parsing..."
      },
      "Spring Boot": {
        "Intro": "Spring Boot simplifies backend dev using starters and annotations...",
        "JPA": "Java Persistence API helps ORM between Java and DB..."
      }
    };

    res.status(200).json(privateNotes);
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
}

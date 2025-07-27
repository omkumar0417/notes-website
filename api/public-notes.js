export default function handler(req, res) {
  const publicNotes = {
    "HTML": [
      {
        title: "HTML Basics",
        date: "2024-05-01",
        tags: ["html", "web"],
        content: "<p>HTML is the standard markup language for creating Web pages.</p>"
      }
    ],
    "CSS": [
      {
        title: "Flexbox Guide",
        date: "2024-05-10",
        tags: ["css", "flexbox"],
        content: "<p>Flexbox helps you design flexible responsive layout structure.</p>"
      }
    ]
  };

  res.status(200).json(publicNotes);
}

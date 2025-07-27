export default function handler(req, res) {
  const publicNotes = {
    "Java": {
      "Basics": "Java is a high-level, object-oriented programming language...",
      "OOP": "Java supports four main pillars: Inheritance, Encapsulation..."
    },
    "HTML": {
      "Tags": "HTML uses tags like <div>, <a>, <p>, <img> to structure content...",
      "Forms": "Forms in HTML include input, select, textarea elements..."
    }
  };

  res.status(200).json(publicNotes);
}

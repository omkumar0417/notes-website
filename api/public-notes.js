export default function handler(req, res) {
  const publicNotes = {
    "Java": {
      "Introduction": "Java is a high-level, object-oriented programming language...",
      "Variables": "Variables in Java are containers for storing data values..."
    },
    "DSA": {
      "Arrays": "Arrays in DSA are used to store elements of the same type...",
      "Stacks": "A stack is a linear data structure which follows LIFO..."
    }
  };

  res.status(200).json(publicNotes);
}

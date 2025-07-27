export default function handler(req, res) {
  const publicNotes = {
    "Java": {
      "Basics": "Java is a high-level, object-oriented programming language...",
      "OOP": "Java supports four main pillars: Inheritance, Encapsulation..."
    },
    "HTML": {
      "Tags": "HTML uses tags like <div>, <a>, <p>, <img> to structure content...",
      "Forms": "Forms in HTML include input, select, textarea elements..."
    },
    "CSS": {
      "Selectors": "CSS uses selectors like .class, #id, element to style HTML...",
      "Flexbox": "Flexbox is a layout model that allows responsive design..."
    },
    "JavaScript": {
      "Variables": "JavaScript uses var, let, const to declare variables...",
      "Functions": "Functions can be declared using function keyword or arrow syntax..."
    },
    "Python": {
      "Data Types": "Python has built-in types like int, float, str, list...",
      "Control Flow": "Python uses if, for, while statements for control flow..."
    },
    "C Language": [
      {
        "title": "C Language Summary",
        "date": "2025-07-13",
        "content": "C is a general-purpose, procedural programming language developed in 1972 by Dennis Ritchie at Bell Labs.<br><br>✅ Key Features:<br>- Procedural<br>- Fast and efficient<br>- Low-level memory access<br>- Portable<br>- Foundation for many modern languages (C++, Java, etc.)<br><br>📁 Uses:<br>- System programming (OS, drivers)<br>- Embedded systems<br>- Game development<br><br>🧩 Basic Structure:<br>```c<br>#include <stdio.h><br><br>int main() {<br>    printf(\"Hello, World!\<br>\");<br>    return 0;<br>}<br>```"
      },
      {
        "title": "Structure of C Program",
        "date": "2025-07-13",
        "content": "A C program typically consists of:<br><br>1️⃣ Preprocessor directives<br>2️⃣ Global declarations<br>3️⃣ main() function<br>4️⃣ User-defined functions<br><br>📌 Example:<br>```c<br>#include <stdio.h>      // Preprocessor<br><br>int sum(int a, int b);  // Function declaration<br><br>int main() {<br>    int result = sum(2, 3);<br>    printf(\"%d\", result);<br>    return 0;<br>}<br><br>int sum(int a, int b) {  // Function definition<br>    return a + b;<br>}<br>```"
      },
      {
        "title": "Keywords and Identifiers",
        "date": "2025-07-13",
        "content": "🔑 **Keywords**: Reserved words used by C compiler (cannot be used as identifiers)<br>Examples: `int`, `return`, `if`, `else`, `while`<br><br>🆔 **Identifiers**: Names used for variables, functions, arrays, etc.<br>Rules:<br>- Only alphabets, digits, and underscores<br>- Cannot start with a digit<br>- Case-sensitive<br>- No spaces or special symbols"
      },
      {
"title": "Variables and Data Types",
"date": "2025-07-13",
"content": "🔸 A variable is a named memory location to store data.<br><br>📦 **Data Types in C**:<br>- `int` - Integers (2 or 4 bytes)<br>- `float` - Floating point numbers<br>- `double` - Double precision float<br>- `char` - Single character<br><br>🧪 Example:<br>```c<br>int age = 20;<br>float pi = 3.14;<br>char grade = 'A';<br>```"
      },
      {
        "title": "Operators in C",
        "date": "2025-07-13",
        "content": "Operators are used to perform operations on variables and values.<br><br>🔹 Types of Operators:<br>- Arithmetic: `+`, `-`, `*`, `/`, `%`<br>- Relational: `==`, `!=`, `>`, `<`, `>=`, `<=`<br>- Logical: `&&`, `||`, `!`<br>- Assignment: `=`, `+=`, `-=`, etc.<br>- Increment/Decrement: `++`, `--`<br>- Bitwise: `&`, `|`, `^`, `~`, `<<`, `>>`<br>- Ternary: `?:`<br><br>Example:<br>```c<br>int a = 5, b = 3;<br>int sum = a + b;  // Arithmetic<br>if (a > b) {}     // Relational<br>```"
      },
      {
        "title": "Input and Output in C",
        "date": "2025-07-13",
        "content": "C uses standard input/output functions like printf() and scanf().<br><br>📥 **Input**: Use scanf() to read user input.<br>📤 **Output**: Use printf() to display output.<br><br>Example:<br>```c<br>#include <stdio.h><br><br>int main() {<br>    int num;<br>    printf(\"Enter a number: \");<br>    scanf(\"%d\", &num);<br>    printf(\"You entered: %d\", num);<br>    return 0;<br>}<br>```"
      }
    ]
  };

  res.status(200).json(publicNotes);
}

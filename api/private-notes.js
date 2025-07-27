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
      ],
      "C ": [
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
    "content": "📥 Input: `scanf()`<br>📤 Output: `printf()`<br><br>Example:<br>```c<br>#include <stdio.h><br>int main() {<br>    int age;<br>    printf(\"Enter age: \");<br>    scanf(\"%d\", &age);<br>    printf(\"You are %d years old\", age);<br>    return 0;<br>}<br>```"
  },
  {
    "title": "Control Statements (if, else, switch)",
    "date": "2025-07-13",
    "content": "Used to make decisions based on conditions.<br><br>🔸 `if`, `else if`, `else`<br>🔸 `switch` (multiple case handling)<br><br>```c<br>if (a > b) {<br>    printf(\"A is greater\");<br>} else {<br>    printf(\"B is greater\");<br>}<br><br>switch (choice) {<br>    case 1: printf(\"One\"); break;<br>    case 2: printf(\"Two\"); break;<br>    default: printf(\"Invalid\");<br>}<br>```"
  },
  {
    "title": "Loops in C (for, while, do-while)",
    "date": "2025-07-13",
    "content": "Loops are used to repeat a block of code.<br><br>🔁 Types of loops:<br>- `for` loop: Known number of iterations<br>- `while` loop: Entry-controlled<br>- `do-while`: Exit-controlled<br><br>```c<br>for (int i = 0; i < 5; i++) {<br>    printf(\"%d \", i);<br>}<br><br>int i = 0;<br>while (i < 5) {<br>    printf(\"%d \", i);<br>    i++;<br>}<br><br>do {<br>    printf(\"%d \", i);<br>    i++;<br>} while (i < 5);<br>```"
  },
  {
    "title": "Break and Continue",
    "date": "2025-07-13",
    "content": "`break`: Exit from loop/switch immediately.<br>`continue`: Skip current iteration and continue with next.<br><br>Example:<br>```c<br>for (int i = 0; i < 10; i++) {<br>    if (i == 5) continue;<br>    if (i == 8) break;<br>    printf(\"%d \", i);<br>}<br>```"
  },
  {
    "title": "Functions in C",
    "date": "2025-07-13",
    "content": "Function: A block of code that performs a specific task.<br><br>📌 Syntax:<br>```c<br>return_type function_name(params) {<br>    // code<br>}<br>```<br><br>Example:<br>```c<br>int add(int a, int b) {<br>    return a + b;<br>}<br>```"
  },
  {
    "title": "Recursion in C",
    "date": "2025-07-13",
    "content": "When a function calls itself.<br><br>📌 Example: Factorial<br>```c<br>int factorial(int n) {<br>    if (n == 0) return 1;<br>    return n * factorial(n - 1);<br>}<br>```"
  },
  {
    "title": "Storage Classes",
    "date": "2025-07-13",
    "content": "Defines scope, lifetime, and visibility of variables.<br><br>📂 Types:<br>- auto<br>- extern<br>- static<br>- register<br><br>Example:<br>```c<br>static int count = 0;<br>```"
  },
  {
    "title": "Arrays in C",
    "date": "2025-07-13",
    "content": "Array: Collection of similar data types.<br><br>📌 Syntax:<br>```c<br>int arr[5] = {1, 2, 3, 4, 5};<br>```<br><br>Access:<br>```c<br>printf(\"%d\", arr[2]); // 3<br>```"
  },
  {
    "title": "Multidimensional Arrays",
    "date": "2025-07-13",
    "content": "Arrays with more than one index.<br><br>📌 Syntax:<br>```c<br>int matrix[2][3] = {{1,2,3},{4,5,6}};<br>```"
  },
  {
    "title": "Strings in C",
    "date": "2025-07-13",
    "content": "A string is an array of characters ending with `\\0`<br><br>📌 Declaring:<br>```c<br>char str[20] = \"Hello\";<br>```<br>📚 Functions:<br>- strlen()<br>- strcpy()<br>- strcat()<br>- strcmp()"
  },
  {
    "title": "Pointers in C",
    "date": "2025-07-13",
    "content": "A pointer stores the address of another variable.<br><br>📌 Syntax:<br>```c<br>int a = 10;<br>int *p = &a;<br>printf(\"%d\", *p); // 10<br>```<br><br>Use: dynamic memory, arrays, functions, strings"
  },
  {
    "title": "Pointer and Array Relationship",
    "date": "2025-07-13",
    "content": "An array name is a pointer to its first element.<br><br>```c<br>int arr[3] = {1,2,3};<br>int *p = arr;<br>printf(\"%d\", *(p + 1)); // 2<br>```"
  },
  {
    "title": "Functions with Pointers",
    "date": "2025-07-13",
    "content": "You can pass pointers to functions for reference:<br><br>```c<br>void update(int *a) {<br>    *a = 20;<br>}<br>```"
  },
  {
    "title": "Structures in C",
    "date": "2025-07-13",
    "content": "Structure groups different types under one name.<br><br>```c<br>struct Student {<br>    int id;<br>    char name[20];<br>};<br><br>struct Student s1 = {101, \"Om\"};<br>```"
  },
  {
    "title": "Union in C",
    "date": "2025-07-13",
    "content": "Like structure, but memory is shared among members.<br><br>```c<br>union Data {<br>    int i;<br>    float f;<br>};<br>```"
  },
  {
    "title": "File Handling in C",
    "date": "2025-07-13",
    "content": "Used to read/write external files.<br><br>📌 Functions:<br>- fopen()<br>- fclose()<br>- fprintf(), fscanf()<br>- fgetc(), fputc()<br><br>```c<br>FILE *fp = fopen(\"data.txt\", \"w\");<br>fprintf(fp, \"Hello\");<br>fclose(fp);<br>```"
  },
  {
    "title": "Dynamic Memory Allocation",
    "date": "2025-07-13",
    "content": "Used to allocate memory at runtime.<br><br>🔧 Functions:<br>- malloc()<br>- calloc()<br>- realloc()<br>- free()<br><br>```c<br>int *p = (int*)malloc(5 * sizeof(int));<br>free(p);<br>```"
  }
]
    };

    return res.status(200).json(privateNotes);
  } else {
    return res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
}

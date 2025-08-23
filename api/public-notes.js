export default function handler(req, res) {
  const publicNotes = {
    "Operating Systems (College)": {
      "Unit 1: Introduction to Operating Systems": "Covers the basics of OS, types, functions, and system components. Explains kernel, shell, and user interface concepts.",
      "Unit 2: Process Management": "Explains processes, threads, process scheduling, context switching, and synchronization mechanisms.",
      "Unit 3: Memory Management": "Discusses memory allocation, paging, segmentation, virtual memory, and memory protection.",
      "Unit 4: File Systems": "Describes file concepts, directory structures, file allocation methods, and file system implementation.",
      "Unit 5: Device Management & Deadlocks": "Covers I/O systems, device drivers, deadlock detection, prevention, and recovery.",
      "Syllabus": `
<iframe src="pdfs/os_syllabus.pdf" width="100%" height="600px" class="pdf-frame" style="border:1px solid #a855f7;border-radius:8px;"></iframe>
<br>If the PDF does not display, <a href="pdfs/os_syllabus.pdf" target="_blank" style="color:#a855f7;font-weight:bold;">click here to open it in a new tab</a>.
`,
      "Important Questions": "A curated list of frequently asked questions and previous year exam questions for Operating Systems."
    },
    "Mathematics III (College)": {
      "Unit 1: Laplace Transforms": "Introduction to Laplace transforms, properties, and applications in engineering problems.",
      "Unit 2: Fourier Series and Transforms": "Covers Fourier series, integrals, and transforms with engineering applications.",
      "Unit 3: Partial Differential Equations": "Formation, solutions, and applications of partial differential equations.",
      "Unit 4: Complex Analysis": "Analytic functions, Cauchy-Riemann equations, contour integration, and residue theorem.",
      "Unit 5: Probability and Statistics": "Probability distributions, mean, variance, hypothesis testing, and statistical methods.",
      "Syllabus": "Detailed syllabus for Mathematics III including all units and reference books.",
      "Formula Sheet": "A comprehensive formula sheet for quick revision and exam preparation."
    },
    "Computer Organization & Architecture (College)": {
      "Unit 1: Basic Computer Organization": "Covers computer components, instruction cycles, and basic architecture.",
      "Unit 2: Microprogrammed Control": "Microinstructions, control memory, and microprogramming concepts.",
      "Unit 3: Central Processing Unit": "CPU organization, instruction formats, addressing modes, and ALU design.",
      "Unit 4: Memory Organization": "Memory hierarchy, cache, RAM, ROM, and associative memory.",
      "Unit 5: Input/Output Organization": "I/O interfaces, data transfer methods, interrupts, and DMA.",
      "Syllabus": "Complete syllabus for COA with unit-wise breakdown and recommended readings.",
      "Viva Questions": "Common viva and oral exam questions for COA practicals and theory."
    },
    "Data Structures & Algorithms (College)": {
      "Unit 1: Introduction to Data Structures": "Overview of data structures, types, and algorithm analysis.",
      "Unit 2: Linear Data Structures": "Arrays, linked lists, stacks, and queues with operations and applications.",
      "Unit 3: Non-Linear Data Structures": "Trees, binary trees, BST, AVL trees, and graph representations.",
      "Unit 4: Sorting and Searching Algorithms": "Bubble, selection, insertion, merge, quick sort, and search algorithms.",
      "Unit 5: Hashing and Advanced Topics": "Hash tables, collision resolution, and introduction to advanced data structures.",
      "Syllabus": "Unit-wise syllabus for DSA, including practical and theoretical components.",
      "Interview Preparation": "Key DSA questions and problems commonly asked in technical interviews."
    },
    "Advanced Programming Practice (College)": {
      "Unit 1: Advanced C Programming": "Pointers, dynamic memory, file handling, and modular programming in C.",
      "Unit 2: Object-Oriented Programming": "OOP concepts, classes, objects, inheritance, and polymorphism in C++/Java.",
      "Unit 3: Data Structures Implementation": "Implementing stacks, queues, trees, and graphs in code.",
      "Unit 4: Algorithms and Complexity": "Algorithm design, complexity analysis, and optimization techniques.",
      "Unit 5: Real-World Projects": "Building mini-projects and applications using advanced programming concepts.",
      "Syllabus": "Comprehensive syllabus for Advanced Programming Practice with project guidelines.",
      "Coding Challenges": "A set of coding challenges and practice problems to enhance programming skills."
    },
    "C Language": [
      {
        "title": "C Language Summary",
        "date": "2025-07-13",
        "content": "C is a general-purpose, procedural programming language developed in 1972 by Dennis Ritchie at Bell Labs. It is known for its efficiency, portability, and low-level memory access. C forms the foundation for many modern languages like C++, Java, and Python.<br><br>✅ Key Features:<br>- Procedural programming: Organizes code into functions<br>- Fast and efficient: Direct access to memory and hardware<br>- Low-level memory access: Use of pointers and direct memory manipulation<br>- Portable: Code can run on different platforms with minimal changes<br>- Foundation for system programming, embedded systems, and game development<br><br>📁 Uses:<br>- Operating systems (Unix, Linux)<br>- Device drivers<br>- Embedded systems<br>- Game engines<br><br>🧩 Basic Structure:<br>```c<br>#include <stdio.h><br><br>int main() {<br>    printf(\"Hello, World!\\n\");<br>    return 0;<br>}<br>```<br>This program includes the standard I/O library, defines the main function, prints a message, and returns 0 to indicate successful execution."
      },
      {
        "title": "Structure of C Program",
        "date": "2025-07-13",
        "content": "A C program typically consists of several sections:<br><br>1️⃣ Preprocessor directives: Instructions to the compiler, such as #include and #define.<br>2️⃣ Global declarations: Variables and functions declared outside main().<br>3️⃣ main() function: Entry point of the program.<br>4️⃣ User-defined functions: Additional functions for modularity.<br><br>📌 Example:<br>```c<br>#include <stdio.h>      // Preprocessor<br><br>int sum(int a, int b);  // Function declaration<br><br>int main() {<br>    int result = sum(2, 3);<br>    printf(\"%d\", result);<br>    return 0;<br>}<br><br>int sum(int a, int b) {  // Function definition<br>    return a + b;<br>}<br>```<br>This program demonstrates function declaration, definition, and usage."
      },
      {
        "title": "Keywords and Identifiers",
        "date": "2025-07-13",
        "content": "🔑 **Keywords**: Reserved words used by the C compiler that have special meaning and cannot be used as identifiers. Examples include:<br>- int<br>- return<br>- if<br>- else<br>- while<br>- for<br>- break<br>- continue<br><br>🆔 **Identifiers**: Names given to variables, functions, arrays, etc. Identifiers must follow these rules:<br>- Only alphabets, digits, and underscores<br>- Cannot start with a digit<br>- Case-sensitive<br>- No spaces or special symbols<br><br>Example:<br>```c<br>int total_sum = 0;<br>float average;<br>```"
      },
      {
        "title": "Variables and Data Types",
        "date": "2025-07-13",
        "content": "🔸 A variable is a named memory location to store data. Variables must be declared with a data type before use.<br><br>📦 **Data Types in C**:<br>- int: Integers (typically 2 or 4 bytes)<br>- float: Single-precision floating point numbers<br>- double: Double-precision floating point numbers<br>- char: Single character (1 byte)<br>- void: No value<br><br>Modifiers like short, long, signed, and unsigned can alter the range of data types.<br><br>🧪 Example:<br>```c<br>int age = 20;<br>float pi = 3.14;<br>char grade = 'A';<br>double salary = 50000.50;<br>unsigned int count = 100;<br>```"
      },
      {
        "title": "Operators in C",
        "date": "2025-07-13",
        "content": "Operators are symbols that perform operations on variables and values.<br><br>🔹 Types of Operators:<br>- Arithmetic: +, -, *, /, % (addition, subtraction, multiplication, division, modulus)<br>- Relational: ==, !=, >, <, >=, <= (comparison)<br>- Logical: &&, ||, ! (AND, OR, NOT)<br>- Assignment: =, +=, -=, *=, /=, %= (assign and update values)<br>- Increment/Decrement: ++, -- (increase or decrease by 1)<br>- Bitwise: &, |, ^, ~, <<, >> (manipulate bits)<br>- Ternary: ?: (conditional expression)<br><br>Example:<br>```c<br>int a = 5, b = 3;<br>int sum = a + b;  // Arithmetic<br>if (a > b) {      // Relational<br>    printf(\"a is greater than b\");<br>}<br>int c = a << 1;   // Bitwise left shift<br>```"
      },
      {
        "title": "Input and Output in C",
        "date": "2025-07-13",
        "content": "C uses standard input/output functions from stdio.h for communication with the user.<br><br>📥 **Input**: Use scanf() to read user input. Format specifiers like %d (int), %f (float), %c (char), %s (string) are used.<br>📤 **Output**: Use printf() to display output. Format specifiers are also used here.<br><br>Example:<br>```c<br>#include <stdio.h><br><br>int main() {<br>    int num;<br>    printf(\"Enter a number: \");<br>    scanf(\"%d\", &num);<br>    printf(\"You entered: %d\\n\", num);<br>    return 0;<br>}<br>```<br>This program prompts the user for a number and prints it back."
      }
    ]
  };

  res.status(200).json(publicNotes);
}
//  <object data="os_syllabus.pdf#toolbar=0&navpanes=0&scrollbar=0"

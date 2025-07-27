export default function handler(req, res) {
  const publicNotes = {
    "Java": {
      "Introduction": "Java is a versatile, object-oriented programming language developed by Sun Microsystems. It is designed to have as few implementation dependencies as possible, making it ideal for cross-platform applications.",
      "History": "Java was released in 1995 and quickly became popular for its portability and security features. The language has evolved through several versions, each adding new capabilities.",
      "Features": "Java offers platform independence, automatic garbage collection, robust exception handling, multithreading, and a rich standard library. Its syntax is similar to C++, but it removes low-level constructs like pointers.",
      "JVM": "The Java Virtual Machine (JVM) enables Java programs to run on any device or operating system. It interprets compiled Java bytecode and provides memory management and security.",
      "JRE & JDK": "The Java Runtime Environment (JRE) provides libraries and JVM for running Java applications. The Java Development Kit (JDK) includes the JRE plus development tools like the compiler and debugger.",
      "Syntax": "Java syntax is similar to C/C++. Statements end with semicolons, blocks are enclosed in curly braces, and variables must be declared with a type.",
      "Data Types": "Java supports primitive data types (int, float, double, char, boolean, byte, short, long) and reference types (arrays, objects).",
      "Variables": "Variables in Java must be declared with a type. They can be local, instance, or static, depending on their scope and usage.",
      "Operators": "Java provides arithmetic, relational, logical, bitwise, assignment, and ternary operators. Operator precedence determines the order of evaluation.",
      "Control Statements": "Java supports if, else, switch, for, while, do-while, break, continue, and return statements for controlling program flow.",
      "Classes": "Classes are blueprints for objects. They encapsulate data and methods. Java supports single inheritance and interfaces for multiple inheritance.",
      "Objects": "Objects are instances of classes. They have state (fields) and behavior (methods). Objects are created using the 'new' keyword.",
      "Methods": "Methods define the behavior of objects. They can have parameters and return values. Java supports method overloading and overriding.",
      "Constructors": "Constructors initialize objects. They have the same name as the class and no return type. Java supports constructor overloading.",
      "Inheritance": "Inheritance allows a class to acquire properties and methods of another class. The 'extends' keyword is used for inheritance.",
      "Polymorphism": "Polymorphism enables objects to be treated as instances of their parent class. It supports method overriding and dynamic method dispatch.",
      "Encapsulation": "Encapsulation hides internal details and exposes only necessary features. Access modifiers (private, protected, public) control visibility.",
      "Abstraction": "Abstraction focuses on essential features by hiding implementation details. Abstract classes and interfaces are used for abstraction.",
      "Interfaces": "Interfaces define a contract for classes. They can contain abstract methods and constants. Classes implement interfaces using the 'implements' keyword.",
      "Packages": "Packages organize classes into namespaces. The 'import' statement is used to access classes from other packages.",
      "Exception Handling": "Java uses try, catch, finally, throw, and throws for robust error handling. Checked and unchecked exceptions are supported.",
      "Multithreading": "Java supports concurrent programming using threads. The Thread class and Runnable interface are used to create and manage threads.",
      "Collections": "The Collections Framework provides data structures like List, Set, Map, and Queue. It supports generics and utility methods.",
      "Generics": "Generics enable type-safe code and reusable algorithms. They are used with collections and custom classes.",
      "File I/O": "Java provides classes in java.io and java.nio for reading and writing files, handling streams, and working with directories.",
      "Networking": "Java supports network programming using sockets, URLs, and HTTP connections. The java.net package provides relevant classes.",
      "GUI Programming": "Java offers GUI development using Swing, AWT, and JavaFX. Components like JFrame, JButton, and JPanel are used to build interfaces.",
      "Annotations": "Annotations provide metadata for classes, methods, and fields. They are used for configuration, documentation, and code analysis.",
      "Lambda Expressions": "Introduced in Java 8, lambda expressions enable functional programming and simplify code for event handling and collections.",
      "Streams API": "The Streams API allows functional-style operations on collections, such as filtering, mapping, and reducing data.",
      "JDBC": "Java Database Connectivity (JDBC) enables interaction with databases. It supports SQL queries, transactions, and connection pooling.",
      "Unit Testing": "JUnit and TestNG are popular frameworks for writing and running unit tests in Java.",
      "Best Practices": "Follow naming conventions, use design patterns, write modular code, handle exceptions properly, and document your code for maintainability."
    },
    "HTML": {
      "Tags": "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It uses tags to structure content, such as headings, paragraphs, links, images, lists, tables, and forms. Tags are enclosed in angle brackets, and most have opening and closing forms.<br><br>Common Tags:<br>- <div>: Defines a division or section<br>- <a>: Creates hyperlinks<br>- <p>: Paragraphs<br>- <img>: Embeds images<br>- <ul>/<ol>: Unordered/ordered lists<br>- <table>: Tables<br><br>Example:<br>```html<br><h1>Welcome</h1><p>This is a paragraph.</p><a href=\"https://example.com\">Visit</a><br>```",
      "Forms": "HTML forms are used to collect user input. They consist of form elements like input fields, checkboxes, radio buttons, select dropdowns, and textareas. Forms use the <form> tag and can send data to a server using GET or POST methods.<br><br>Common Elements:<br>- <input>: Text, password, email, etc.<br>- <select>: Dropdown list<br>- <textarea>: Multi-line text input<br>- <button>: Clickable button<br><br>Example:<br>```html<br><form action=\"/submit\" method=\"post\"><br>  <input type=\"text\" name=\"username\"><br>  <input type=\"password\" name=\"pwd\"><br>  <button type=\"submit\">Login</button><br></form><br>```"
    },
    "CSS": {
      "Selectors": "CSS (Cascading Style Sheets) is used to style and layout web pages. Selectors target HTML elements to apply styles. There are several types:<br><br>- Element selector: Targets all elements of a type (e.g., p, h1)<br>- Class selector: Targets elements with a specific class (e.g., .container)<br>- ID selector: Targets a unique element (e.g., #header)<br>- Attribute selector: Targets elements with specific attributes<br>- Descendant, child, and sibling selectors for complex relationships<br><br>Example:<br>```css<br>p { color: blue; }<br>.main { padding: 10px; }<br>#nav { background: #eee; }<br>```",
      "Flexbox": "Flexbox is a CSS layout model that makes it easy to design flexible and responsive layouts. It arranges items in rows or columns and distributes space dynamically.<br><br>Key Properties:<br>- display: flex;<br>- flex-direction: row | column<br>- justify-content: center | space-between | flex-end<br>- align-items: center | stretch<br>- flex-wrap: wrap<br><br>Example:<br>```css<br>.container {<br>  display: flex;<br>  flex-direction: row;<br>  justify-content: space-between;<br>  align-items: center;<br>}<br>```"
    },
    "JavaScript": {
      "Variables": "JavaScript is a versatile scripting language for web development. Variables store data values and can be declared using:<br><br>- var: Function-scoped, can be redeclared and updated<br>- let: Block-scoped, can be updated but not redeclared in the same scope<br>- const: Block-scoped, cannot be updated or redeclared<br><br>Example:<br>```js<br>var name = \"Alice\";<br>let age = 25;<br>const PI = 3.14;<br>```<br>Variables can hold numbers, strings, objects, arrays, functions, etc.",
      "Functions": "Functions are reusable blocks of code that perform specific tasks. They can be declared using the function keyword or arrow syntax.<br><br>Function Declaration:<br>```js<br>function greet(name) {<br>  return \"Hello, \" + name;<br>}<br>```<br>Arrow Function:<br>```js<br>const add = (a, b) => a + b;<br>```<br>Functions can accept parameters and return values. They are first-class objects, meaning they can be assigned to variables, passed as arguments, and returned from other functions."
    },
    "Python": {
      "Data Types": "Python is a high-level, interpreted language known for its readability and simplicity. It has several built-in data types:<br><br>- int: Integer numbers<br>- float: Decimal numbers<br>- str: Text data<br>- list: Ordered, mutable collection<br>- tuple: Ordered, immutable collection<br>- dict: Key-value pairs<br>- set: Unordered, unique elements<br><br>Example:<br>```python<br>age = 20<br>pi = 3.14<br>name = \"Alice\"<br>numbers = [1, 2, 3]<br>info = {\"name\": \"Bob\", \"age\": 25}<br>```",
      "Control Flow": "Python uses control flow statements to direct program execution:<br><br>- if/elif/else: Conditional branching<br>- for: Iteration over sequences<br>- while: Looping until a condition is false<br>- break/continue: Alter loop execution<br><br>Example:<br>```python<br>for i in range(5):<br>  if i % 2 == 0:<br>    print(i, \"is even\")<br>  else:<br>    print(i, \"is odd\")<br>```"
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

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
  }],
      "Java": [
        {
          title: "Introduction",
          private: true,
          content: `
- Java is a powerful, versatile, and widely-used programming language, developed in 1995 by Sun Microsystems under James Gosling.<br>
- Designed with "Write Once, Run Anywhere" (WORA) – Java code runs on any device with a Java Virtual Machine (JVM).<br>
- Platform independent through compilation to bytecode, which the JVM executes.<br>
- Object-oriented language, promoting modularity, code reuse, and maintainability.<br>
- Simpler than C/C++, avoiding direct memory manipulation and pointer arithmetic.<br>
- Features like automatic garbage collection, exception handling, and strong type checking** enhance reliability and security.<br>
- Rich standard library (Java API) supports tasks like data structures, networking, GUIs, and cryptography.<br>
- Supports multithreading, enabling concurrent execution for responsive and scalable apps.<br>
- Vast ecosystem with frameworks like Spring, Hibernate, and JSF for rapid development.<br>
- Core language for Android development and widely used in enterprise software.<br>
- Integrates well with databases, messaging systems, and cloud platforms.<br>
- Continually evolves with new features (e.g., generics, annotations, lambdas, Streams API).<br>
- Backward compatibility ensures older code runs on newer versions.<br>
- Large, active global community contributes to open-source projects and knowledge sharing.<br>
- Maintained by Oracle, with regular updates for performance, security, and features.<br>
- Ideal for building desktop, web, mobile, and enterprise applications.<br>

Example: Hello World in Java
<pre>
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
</pre>
This simple program demonstrates Java's syntax, the use of classes and methods, and the standard output mechanism. The main method serves as the entry point for the application, and System.out.println prints the message to the console.
`
        },
        {
          title: "History",
          private: true,
          content: `- Java was created by James Gosling at Sun Microsystems and released in 1995.<br>
- Originally designed for interactive television, but was too advanced for the digital cable industry at the time.<br>
- Gained popularity for web and enterprise application development due to its platform independence and security.<br>
- In 2009, Sun Microsystems was acquired by Oracle Corporation, which now maintains Java.<br>
- Java has evolved through multiple versions, adding features like Generics (Java 5), Annotations, Lambda Expressions (Java 8), and the Module System (Java 9).<br>
- Regular updates continue to improve performance, security, and developer productivity.<br>`
        },
        {
          title: "Features",
          private: true,
          content: "Java offers platform independence via the JVM, automatic garbage collection, robust exception handling, multithreading, and a rich standard library. Its syntax is similar to C++, but it removes low-level constructs like pointers, making it safer and easier to use."
        },
        {
          title: "JVM",
          private: true,
          content: "The Java Virtual Machine (JVM) is an abstract computing machine that enables Java bytecode to be executed on any platform. The JVM handles memory management, security, and provides a layer of abstraction between the compiled Java code and the underlying hardware."
        },
        {
          title: "JRE & JDK",
          private: true,
          content: "The Java Runtime Environment (JRE) includes the JVM and standard libraries required to run Java applications. The Java Development Kit (JDK) contains the JRE plus development tools such as the Java compiler (javac), debugger, and other utilities needed for developing Java programs."
        },
        {
          title: "Syntax",
          private: true,
          content: "Java syntax is similar to C/C++. Statements end with semicolons, blocks are enclosed in curly braces, and variables must be declared with a type. Example:<br>```java<br>int x = 10;<br>if (x > 5) {<br>  System.out.println(\"x is greater than 5\");<br>}<br>```"
        },
        {
          title: "Data Types",
          private: true,
          content: "Java supports primitive data types (byte, short, int, long, float, double, char, boolean) and reference types (arrays, objects). Example:<br>```java<br>int age = 25;<br>double salary = 50000.50;<br>char grade = 'A';<br>boolean isActive = true;<br>```"
        },
        {
          title: "Variables",
          private: true,
          content: "Variables must be declared with a type. Local variables are declared inside methods, instance variables are declared in a class, and static variables are shared among all instances. Example:<br>```java<br>class Person {<br>  String name;<br>  static int count;<br>}<br>```"
        },
        {
          title: "Operators",
          private: true,
          content: "Java provides arithmetic (+, -, *, /, %), relational (==, !=, >, <, >=, <=), logical (&&, ||, !), bitwise (&, |, ^, ~, <<, >>), assignment (=, +=, -=, etc.), and ternary (?:) operators. Example:<br>```java<br>int a = 5, b = 3;<br>int sum = a + b;<br>boolean isEqual = (a == b);<br>```"
        },
        {
          title: "Control Statements",
          private: true,
          content: "Java supports if, else, switch, for, while, do-while, break, continue, and return statements for controlling program flow. Example:<br>```java<br>for (int i = 0; i < 5; i++) {<br>  if (i % 2 == 0) continue;<br>  System.out.println(i);<br>}<br>```"
        },
        {
          title: "Classes",
          private: true,
          content: "A class is a blueprint for objects. It encapsulates data and methods. Example:<br>```java<br>class Car {<br>  String model;<br>  void drive() {<br>    System.out.println(\"Driving \" + model);<br>  }<br>}<br>```"
        },
        {
          title: "Objects",
          private: true,
          content: "Objects are instances of classes. They have state (fields) and behavior (methods). Example:<br>```java<br>Car myCar = new Car();<br>myCar.model = \"Honda\";<br>myCar.drive();<br>```"
        },
        {
          title: "Methods",
          private: true,
          content: "Methods define the behavior of objects. They can have parameters and return values. Java supports method overloading (same name, different parameters) and overriding (subclass redefines method). Example:<br>```java<br>int add(int a, int b) { return a + b; }<br>double add(double a, double b) { return a + b; }<br>```"
        },
        {
          title: "Constructors",
          private: true,
          content: "Constructors initialize objects. They have the same name as the class and no return type. Example:<br><br>class Student {<br>  String name;<br>  Student(String n) { name = n; }<br>}<br>Student s = new Student(\"Alice\");<br>"
        },
        {
          title: "Inheritance",
          private: true,
          content: "Inheritance allows a class to acquire properties and methods of another class. The 'extends' keyword is used. Example:<br>```java<br>class Animal { void eat() {} }<br>class Dog extends Animal { void bark() {} }<br>```"
        },
        {
          title: "Polymorphism",
          private: true,
          content: "Polymorphism enables objects to be treated as instances of their parent class. It supports method overriding and dynamic method dispatch. Example:<br>```java<br>Animal a = new Dog();<br>a.eat();<br>```"
        },
        {
          title: "Encapsulation",
          private: true,
          content: "Encapsulation hides internal details and exposes only necessary features. Access modifiers (private, protected, public) control visibility. Example:<br>```java<br>class Account {<br>  private double balance;<br>  public double getBalance() { return balance; }<br>}<br>```"
        },
        {
          title: "Abstraction",
          private: true,
          content: "Abstraction focuses on essential features by hiding implementation details. Abstract classes and interfaces are used for abstraction. Example:<br>```java<br>abstract class Shape {<br>  abstract void draw();<br>}<br>```"
        },
        {
          title: "Interfaces",
          private: true,
          content: "Interfaces define a contract for classes. They can contain abstract methods and constants. Classes implement interfaces using the 'implements' keyword. Example:<br>```java<br>interface Drawable { void draw(); }<br>class Circle implements Drawable {<br>  public void draw() { System.out.println(\"Drawing Circle\"); }<br>}<br>```"
        },
        {
          title: "Packages",
          private: true,
          content: "Packages organize classes into namespaces. The 'import' statement is used to access classes from other packages. Example:<br>```java<br>package myapp;<br>import java.util.*;<br>```"
        },
        {
          title: "Exception Handling",
          private: true,
          content: "Java uses try, catch, finally, throw, and throws for robust error handling. Checked exceptions must be declared or handled, unchecked exceptions do not. Example:<br>```java<br>try {<br>  int x = 10 / 0;<br>} catch (ArithmeticException e) {<br>  System.out.println(\"Error: \" + e.getMessage());<br>} finally {<br>  System.out.println(\"Done\");<br>}<br>```"
        },
        {
          title: "Multithreading",
          private: true,
          content: "Java supports concurrent programming using threads. The Thread class and Runnable interface are used to create and manage threads. Example:<br>```java<br>class MyThread extends Thread {<br>  public void run() { System.out.println(\"Thread running\"); }<br>}<br>MyThread t = new MyThread();<br>t.start();<br>```"
        },
        {
          title: "Collections",
          private: true,
          content: "The Collections Framework provides data structures like List, Set, Map, and Queue. It supports generics and utility methods. Example:<br>```java<br>List<String> names = new ArrayList<>();<br>names.add(\"Alice\");<br>names.add(\"Bob\");<br>```"
        },
        {
          title: "Generics",
          private: true,
          content: "Generics enable type-safe code and reusable algorithms. They are used with collections and custom classes. Example:<br>```java<br>class Box<T> {<br>  T value;<br>  void set(T v) { value = v; }<br>  T get() { return value; }<br>}<br>```"
        },
        {
          title: "File I/O",
          private: true,
          content: "Java provides classes in java.io and java.nio for reading and writing files, handling streams, and working with directories. Example:<br>```java<br>BufferedReader reader = new BufferedReader(new FileReader(\"file.txt\"));<br>String line = reader.readLine();<br>reader.close();<br>```"
        },
        {
          title: "Networking",
          private: true,
          content: "Java supports network programming using sockets, URLs, and HTTP connections. The java.net package provides relevant classes. Example:<br>```java<br>Socket s = new Socket(\"localhost\", 8080);<br>```"
        },
        {
          title: "GUI Programming",
          private: true,
          content: "Java offers GUI development using Swing, AWT, and JavaFX. Components like JFrame, JButton, and JPanel are used to build interfaces. Example:<br>```java<br>JFrame frame = new JFrame(\"Demo\");<br>frame.setSize(300,200);<br>frame.setVisible(true);<br>```"
        },
        {
          title: "Annotations",
          private: true,
          content: "Annotations provide metadata for classes, methods, and fields. They are used for configuration, documentation, and code analysis. Example:<br>```java<br>@Override<br>public void run() { }<br>```"
        },
        {
          title: "Lambda Expressions",
          private: true,
          content: "Introduced in Java 8, lambda expressions enable functional programming and simplify code for event handling and collections. Example:<br>```java<br>List<String> list = Arrays.asList(\"a\", \"b\", \"c\");<br>list.forEach(item -> System.out.println(item));<br>```"
        },
        {
          title: "Streams API",
          private: true,
          content: "The Streams API allows functional-style operations on collections, such as filtering, mapping, and reducing data. Example:<br>```java<br>List<Integer> nums = Arrays.asList(1,2,3,4);<br>nums.stream().filter(n -> n%2==0).forEach(System.out::println);<br>```"
        },
        {
          title: "JDBC",
          private: true,
          content: "Java Database Connectivity (JDBC) enables interaction with databases. It supports SQL queries, transactions, and connection pooling. Example:<br>```java<br>Connection con = DriverManager.getConnection(url, user, pass);<br>Statement stmt = con.createStatement();<br>ResultSet rs = stmt.executeQuery(\"SELECT * FROM users\");<br>```"
        },
        {
          title: "Unit Testing",
          private: true,
          content: "JUnit and TestNG are popular frameworks for writing and running unit tests in Java. Example:<br>```java<br>@Test<br>public void testAdd() {<br>  assertEquals(5, add(2,3));<br>}<br>```"
        },
        {
          title: "Best Practices",
          private: true,
          content: "Follow naming conventions, use design patterns, write modular code, handle exceptions properly, and document your code for maintainability. Example: Use meaningful variable names, keep methods short, and write comments where necessary."
        },
        {
          title: "Syllabus(os.pdf)",
          private: true,
          content: `
You can view the complete Java syllabus PDF directly below:
<div class="pdf-container">
  <object data="pdfs/os_syllabus.pdf#toolbar=0&navpanes=0" 
          type="application/pdf" 
          class="pdf-frame">
    <div class="pdf-fallback">
      <p>Your browser doesn’t support inline PDFs.</p>
      <a href="pdfs/os_syllabus.pdf" target="_blank">Click here to view the PDF</a>
    </div>
  </object>
</div>
<br>
<p>
  This syllabus covers all the essential topics and modules required for your Java course or exam preparation. 
  Please refer to the PDF for a detailed breakdown of chapters, units, and learning objectives.
</p>
`
        }
      ],
    };

    return res.status(200).json(privateNotes);
  } else {
    return res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
}

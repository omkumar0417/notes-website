const notesData = {
  "Java": [
    {
      "title": "Introduction to Java",
      "date": "2025-07-08",
      "content": "Java is a high-level programming language... 88",
      "image": "https://i.postimg.cc/3RhrPJVG/temp-Image-KGb-Kf-L.avif"
    }
  ],
  "DSA": [],
  "Servlet": [
    {
      "title": "Introduction to Servlets",
      "content": "A Servlet is a Java class used to handle HTTP requests and generate dynamic web content.<br>It runs on a server and extends the capabilities of a web server.<br>Servlets are platform-independent, secure, efficient, and portable.<br>Lifecycle of a servlet includes:<br>Initialization (init method)<br>Request Handling (service method)<br>Destruction (destroy method)<br>It uses javax.servlet and javax.servlet.http packages.",
      "date": "2025-07-08",
      "image": ""
    }
  ],
  "JDBC": [
  {
    "title": "JDBC Summary",
    "date": "2025-07-13",
    "content": "JDBC (Java Database Connectivity) is a Java API that allows applications to connect and interact with relational databases using SQL. It acts as a bridge between Java applications and databases like Oracle, MySQL, PostgreSQL, etc.<br><br>💡 Key Features:<br>- Platform-independent API<br>- Supports multiple databases<br>- Allows dynamic SQL execution<br>- Transaction management<br>- Stored procedures and metadata support<br><br>📚 Core Interfaces:<br>- DriverManager<br>- Connection<br>- Statement & PreparedStatement<br>- CallableStatement<br>- ResultSet<br>- ResultSetMetaData<br>- DatabaseMetaData<br><br>🧩 Typical JDBC Workflow:<br>1. Load the Driver<br>2. Establish a Connection<br>3. Create a Statement<br>4. Execute Query<br>5. Process ResultSet<br>6. Close Resources"
  },
  {
    "title": "Introduction to JDBC",
    "date": "2025-07-13",
    "content": "JDBC is a standard Java API that enables Java applications to interact with relational databases.<br><br>🌐 Purpose:<br>- Connect Java programs to databases<br>- Execute SQL statements<br>- Retrieve and process results<br><br>📁 JDBC belongs to the `java.sql` and `javax.sql` packages.<br><br>✨ Example:<br>```java<br>Class.forName(\"oracle.jdbc.OracleDriver\");<br>Connection con = DriverManager.getConnection(\"jdbc:oracle:thin:@localhost:1521:xe\", \"username\", \"password\");<br>Statement stmt = con.createStatement();<br>ResultSet rs = stmt.executeQuery(\"SELECT * FROM employees\");<br>while(rs.next()) {<br>    System.out.println(rs.getString(\"name\"));<br>}<br>con.close();<br>```"
  },
  {
    "title": "JDBC Architecture",
    "date": "2025-07-13",
    "content": "JDBC architecture has two layers:<br><br>1️⃣ **JDBC API Layer:**<br>- Interfaces for developers: Connection, Statement, ResultSet, etc.<br>- Java program uses these to interact with the DB<br><br>2️⃣ **JDBC Driver Layer:**<br>- Translates JDBC API calls to database-specific calls<br>- Provided by database vendors<br><br>📦 Driver Types:<br>- Type 1: JDBC-ODBC Bridge (obsolete)<br>- Type 2: Native-API Driver<br>- Type 3: Network Protocol Driver<br>- Type 4: Thin Driver (Pure Java) ✅<br><br>✅ Type 4 is preferred today for performance and portability."
  },
  {
    "title": "Steps to Connect Java with Database",
    "date": "2025-07-13",
    "content": "🔧 Required Steps:<br> <br> 1️⃣ Load the Driver:<br>```java<br>Class.forName(\"oracle.jdbc.OracleDriver\");<br>```<br><br>2️⃣ Create Connection:<br>```java<br>Connection con = DriverManager.getConnection(\"jdbc:oracle:thin:@localhost:1521:xe\", \"user\", \"pass\");<br>```<br><br>3️⃣ Create Statement:<br>```java<br>Statement stmt = con.createStatement();<br>```<br><br>4️⃣ Execute Query:<br>```java<br>ResultSet rs = stmt.executeQuery(\"SELECT * FROM table\");<br>```<br><br>5️⃣ Process Results:<br>```java<br>while(rs.next()) {<br>    System.out.println(rs.getString(1));<br>}<br>```<br><br>6️⃣ Close:<br>```java<br>con.close();<br>```"
  },
  {
    "title": "Registering JDBC Driver",
    "date": "2025-07-13",
    "content": "JDBC drivers must be loaded before creating connections.<br><br>📌 Done using:<br>```java<br>Class.forName(\"oracle.jdbc.OracleDriver\");<br>```<br><br>📝 Drivers:<br>- Oracle: `oracle.jdbc.OracleDriver`<br>- MySQL: `com.mysql.cj.jdbc.Driver`<br>- PostgreSQL: `org.postgresql.Driver`"
  },
  {
    "title": "Establishing JDBC Connection",
    "date": "2025-07-13",
    "content": "Use `DriverManager.getConnection()` to connect to the DB.<br><br>📌 Syntax:<br>```java<br>Connection con = DriverManager.getConnection(<br>  \"jdbc:oracle:thin:@localhost:1521:xe\",<br>  \"username\", \"password\"<br>);<br>```"
  },
  {
    "title": "Statement Interface",
    "date": "2025-07-13",
    "content": "Used for executing static SQL queries.<br><br>Example:<br>```java<br>Statement stmt = con.createStatement();<br>ResultSet rs = stmt.executeQuery(\"SELECT * FROM student\");<br>```<br><br>⚠️ Not safe for user inputs – vulnerable to SQL Injection."
  },
  {
    "title": "PreparedStatement Interface",
    "date": "2025-07-13",
    "content": "PreparedStatement is used for executing parameterized queries.<br><br>Benefits:<br>- Prevents SQL injection<br>- Precompiled → Better performance<br><br>Example:<br>```java<br>PreparedStatement ps = con.prepareStatement(\"INSERT INTO emp VALUES (?, ?, ?)\");<br>ps.setInt(1, 101);<br>ps.setString(2, \"John\");<br>ps.setInt(3, 5000);<br>ps.executeUpdate();<br>```"
  },
  {
    "title": "CallableStatement Interface",
    "date": "2025-07-13",
    "content": "Used to execute stored procedures in the database.<br><br>Syntax:<br>```java<br>CallableStatement cs = con.prepareCall(\"{call get_salary(?)}\");<br>cs.setInt(1, 101);<br>cs.execute();<br>```"
  },
  {
    "title": "ResultSet Interface",
    "date": "2025-07-13",
    "content": "Holds data retrieved from the database.<br><br>💡 Methods:<br>- `next()` – Moves cursor forward<br>- `getString()`, `getInt()` – Fetch data<br><br>📌 Example:<br>```java<br>while(rs.next()) {<br>  System.out.println(rs.getString(\"name\"));<br>}<br>```"
  },
  {
    "title": "Handling SQL Exceptions",
    "date": "2025-07-13",
    "content": "All JDBC methods can throw `SQLException`, which should be handled.<br><br>```java<br>try {<br>  // DB code<br>} catch(SQLException e) {<br>  System.out.println(e);<br>}<br>```"
  },
  {
    "title": "Closing JDBC Resources",
    "date": "2025-07-13",
    "content": "🔒 Close resources to prevent memory leaks.<br><br>Order:<br>```java<br>rs.close();<br>stmt.close();<br>con.close();<br>```<br>✅ Use try-with-resources (Java 7+)."
  },
  {
    "title": "JDBC Transactions",
    "date": "2025-07-13",
    "content": "Use transactions to execute multiple queries atomically.<br><br>```java<br>con.setAutoCommit(false);<br>// multiple statements<br>con.commit();<br>```<br><br>In case of error:<br>```java<br>con.rollback();<br>```"
  },
  {
    "title": "Batch Processing in JDBC",
    "date": "2025-07-13",
    "content": "Used to execute multiple SQL statements together for better performance.<br><br>```java<br>Statement stmt = con.createStatement();<br>stmt.addBatch(\"INSERT INTO emp VALUES (1, 'A', 1000)\");<br>stmt.addBatch(\"INSERT INTO emp VALUES (2, 'B', 2000)\");<br>stmt.executeBatch();<br>```"
  },
  {
    "title": "DatabaseMetaData",
    "date": "2025-07-13",
    "content": "Gives metadata info about the database.<br><br>```java<br>DatabaseMetaData dbmd = con.getMetaData();<br>System.out.println(dbmd.getDatabaseProductName());<br>```"
  },
  {
    "title": "ResultSetMetaData",
    "date": "2025-07-13",
    "content": "Used to get information about the columns in ResultSet.<br><br>```java<br>ResultSetMetaData rsmd = rs.getMetaData();<br>int count = rsmd.getColumnCount();<br>for(int i = 1; i <= count; i++) {<br>    System.out.println(rsmd.getColumnName(i));<br>}<br>```"
  },
  {
    "title": "Scrollable and Updatable ResultSet",
    "date": "2025-07-13",
    "content": "To scroll or update rows:<br><br>```java<br>Statement stmt = con.createStatement(<br>  ResultSet.TYPE_SCROLL_INSENSITIVE,<br>  ResultSet.CONCUR_UPDATABLE<br>);<br>ResultSet rs = stmt.executeQuery(\"SELECT * FROM emp\");<br>rs.last();<br>rs.previous();<br>```"
  },
  {
    "title": "JDBC with Oracle",
    "date": "2025-07-13",
    "content": "Steps:<br>1. Add ojdbc11.jar to project<br>2. Use driver: `oracle.jdbc.OracleDriver`<br>3. URL: `jdbc:oracle:thin:@localhost:1521:xe`<br><br>```java<br>Class.forName(\"oracle.jdbc.OracleDriver\");<br>Connection con = DriverManager.getConnection(<br>  \"jdbc:oracle:thin:@localhost:1521:xe\", \"user\", \"pass\"<br>);<br>```"
  },
  {
    "title": "JDBC with MySQL",
    "date": "2025-07-13",
    "content": "Steps:<br>1. Add `mysql-connector-java.jar`<br>2. Driver: `com.mysql.cj.jdbc.Driver`<br>3. URL: `jdbc:mysql://localhost:3306/dbname`<br><br>```java<br>Class.forName(\"com.mysql.cj.jdbc.Driver\");<br>Connection con = DriverManager.getConnection(<br>  \"jdbc:mysql://localhost:3306/test\", \"user\", \"pass\"<br>);<br>```"
  },
  {
    "title": "Difference Between Statement and PreparedStatement",
    "date": "2025-07-13",
    "content": "**Statement**<br>- Executes static SQL<br>- Prone to SQL injection<br><br>**PreparedStatement** ✅<br>- Executes dynamic SQL with parameters<br>- Safer & faster (precompiled)"
  },
  {
    "title": "JDBC Best Practices",
    "date": "2025-07-13",
    "content": "✅ Always close ResultSet, Statement, and Connection<br>✅ Use try-with-resources to auto-close<br>✅ Prefer PreparedStatement<br>✅ Avoid hardcoding SQL<br>✅ Use connection pooling in real applications"
  }
],

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
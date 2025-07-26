const notesData = {
  "Java": [
    {
      "title": "Introduction to Java",
      "date": "2025-07-08",
      "content": `Java is a high-level programming language.<br>
It was originally developed by Sun Microsystems and released in 1995.<br>
Java is platform-independent due to the Java Virtual Machine (JVM).<br>
It follows the principle of WORA – Write Once, Run Anywhere.<br>

Java is widely used in web development, Android apps, enterprise software, and more.`,
      "image": "https://i.postimg.cc/3RhrPJVG/temp-Image-KGb-Kf-L.avif"
    }
  ],
  "DSA": [],
  "Servlet": [
    {
      "title": "Introduction to Servlets",
      "date": "2025-07-19",
      "content": `A Servlet is a Java-based server-side component that dynamically handles requests and responses over HTTP.<br>
It runs inside a web container like Apache Tomcat and is used to create web applications with backend logic.<br>
Servlets are written in Java, making them portable, secure, and robust.<br>
Common use cases include form handling, session management, dynamic content generation, and backend APIs.<br><br>

<strong>Advantages of Servlets over CGI:</strong><br>
- Servlets use threads instead of processes, so they consume fewer resources and offer better performance.<br>
- They are platform-independent and secure due to Java's features.<br>
- Servlets support session tracking, cookies, and request dispatching natively.<br>
- Unlike CGI, Servlets don’t need to launch a new process for each request.<br><br>

<strong>Servlet vs Applet:</strong><br>
- Servlet runs on the server, Applet runs in the browser (client-side).<br>
- Servlet is used for backend logic, Applet is used for GUI and frontend.<br>
- Applets are outdated and deprecated; Servlets are still widely used.<br>
- Servlets handle HTTP requests; Applets provide interactive UIs.<br><br>

<strong>Servlet API Packages:</strong><br>
- javax.servlet: Contains core classes like Servlet, ServletRequest, ServletResponse, ServletContext, and RequestDispatcher.<br>
- javax.servlet.http: Contains HTTP-specific classes like HttpServlet, HttpServletRequest, HttpServletResponse, HttpSession, and Cookie.<br><br>

<strong>Servlet Lifecycle:</strong><br>
1. <strong>Loading & Instantiation:</strong> Servlet class is loaded and object is created by the container.<br>
2. <strong>init():</strong> Called once to initialize the servlet.<br>
3. <strong>service():</strong> Called for each request; in HttpServlet, it dispatches to doGet(), doPost(), etc.<br>
4. <strong>destroy():</strong> Called once before servlet is destroyed to release resources.<br>
5. <strong>Garbage Collection:</strong> Servlet object is collected by JVM after destruction.`,
      "image": ""
    },
    {
      "title": "Introduction to Java",
      "date": "2025-07-08",
      "content": `Java is a high-level programming language.
It was originally developed by Sun Microsystems and released in 1995.
Java is platform-independent due to the Java Virtual Machine (JVM).
It follows the principle of WORA – Write Once, Run Anywhere.

Java is widely used in web development, Android apps, enterprise software, and more.`,
      "image": ""
    },
    {
      "title": "intro",
      "date": "2025-07-19",
      "content": "`Here are <strong>detailed notes</strong> for the topic <strong>\"Introduction to Servlets\"</strong> covering all the sub-points:<br><br>---<br><br># <strong>1. Introduction to Servlets</strong><br><br>## 🧾 What is a Servlet?<br><br>A <strong>Servlet</strong> is a <strong>Java-based server-side component</strong> that dynamically processes requests and generates responses, typically over HTTP. Servlets are used to develop web applications.<br><br>* It runs on a <strong>Java-enabled web server</strong> (Servlet container) like Apache Tomcat.<br>* It is part of <strong>Java EE</strong> (Jakarta EE as of now).<br>* Servlets <strong>extend the capabilities of servers</strong>, such as handling form data, managing sessions, connecting to databases, etc.<br>* It <strong>does not generate GUI</strong>; it handles backend logic and typically responds with HTML or JSON.<br><br>### 💡 Example Use Cases:<br><br>* Processing login forms<br>* Retrieving data from a database<br>* Displaying user-specific pages<br>* API endpoints for web apps<br><br>---<br><br>## ✅ Advantages of Servlets over CGI (Common Gateway Interface)<br><br>| Feature                      | CGI                            | Servlet                               |<br>| ---------------------------- | ------------------------------ | ------------------------------------- |<br>| <strong>Language</strong>                 | C, Perl, etc.                  | Java                                  |<br>| <strong>Performance</strong>              | Poor (new process per request) | High (multi-threaded, single process) |<br>| <strong>Portability</strong>              | Platform-dependent             | Platform-independent (Java)           |<br>| <strong>Resource Usage</strong>           | High (forks process)           | Low (threads reuse)                   |<br>| <strong>Security</strong>                 | Low                            | High (Java security features)         |<br>| <strong>Robustness & Scalability</strong> | Low                            | High                                  |<br>| <strong>Session Management</strong>       | Manual                         | Built-in                              |<br><br>### 🔍 Summary:<br><br>* <strong>Servlets are faster</strong>, more secure, and more scalable than CGI scripts.<br>* They eliminate the overhead of creating a new process per request (as in CGI).<br>* They offer <strong>built-in support for sessions, cookies, and request dispatching</strong>.<br><br>---<br><br>## 🔄 Servlet vs Applet<br><br>| Feature       | Servlet (Server-side)                    | Applet (Client-side)                    |<br>| ------------- | ---------------------------------------- | --------------------------------------- |<br>| <strong>Location</strong>  | Runs on the <strong>server</strong>                   | Runs on the <strong>client (browser)</strong>        |<br>| <strong>Execution</strong> | Processes <strong>HTTP requests/responses</strong>    | Provides <strong>UI inside browser</strong>          |<br>| <strong>Purpose</strong>   | Backend logic (data handling, DB access) | Frontend logic (UI, graphics)           |<br>| <strong>Security</strong>  | More secure, runs in server environment  | Less secure, runs in sandbox            |<br>| <strong>Usage</strong>     | Used in <strong>web applications</strong>             | Used in <strong>Java-based GUI applications</strong> |<br>| <strong>Lifespan</strong>  | Managed by web server                    | Managed by browser                      |<br><br>### 🧠 Note:<br><br>* <strong>Applets are deprecated</strong> in modern browsers due to security issues and lack of support.<br>* Servlets remain the <strong>standard way</strong> to build backend logic in Java web apps.<br><br>---<br><br>## 🧩 Servlet API Overview<br><br>Servlets are defined and managed via <strong>Servlet API</strong>, primarily found in these two packages:<br><br>### 📦 `javax.servlet`<br><br>* Core interfaces and classes common to all servlets:<br><br>  * `Servlet`<br>  * `GenericServlet`<br>  * `ServletRequest`, `ServletResponse`<br>  * `ServletConfig`, `ServletContext`<br>  * `RequestDispatcher`<br><br>### 📦 `javax.servlet.http`<br><br>* Specializations for <strong>HTTP-based web apps</strong>:<br><br>  * `HttpServlet` (extends `GenericServlet`)<br>  * `HttpServletRequest`, `HttpServletResponse`<br>  * `HttpSession`<br>  * `Cookie`<br><br>### 🔧 Key Interfaces/Classes:<br><br>| Interface/Class     | Purpose                                                               |<br>| ------------------- | --------------------------------------------------------------------- |<br>| `Servlet`           | Defines the lifecycle methods like `init()`, `service()`, `destroy()` |<br>| `HttpServlet`       | Abstract class to simplify HTTP servlet creation                      |<br>| `ServletRequest`    | Provides request information (parameters, attributes, etc.)           |<br>| `ServletResponse`   | Used to send response data                                            |<br>| `HttpSession`       | For session tracking                                                  |<br>| `RequestDispatcher` | For request forwarding or including                                   |<br><br>---<br><br>## 🔁 Servlet Lifecycle<br><br>A servlet goes through the following <strong>5 phases</strong>, managed by the <strong>Servlet Container</strong> (like Tomcat):<br><br>### 1. <strong>Loading and Instantiation</strong><br><br>* Container loads the servlet class and creates an instance.<br>* Happens <strong>once</strong> per servlet.<br><br>### 2. <strong>Initialization (`init()` method)</strong><br><br>* Called <strong>once</strong> after servlet instance is created.<br>* Initializes resources (e.g., DB connections).<br><br>```java<br>public void init(ServletConfig config) throws ServletException {<br>    // Initialization code here<br>}<br>```<br><br>### 3. <strong>Request Handling (`service()` method)</strong><br><br>* Called <strong>for every request</strong>.<br>* Dispatches to appropriate method (`doGet()`, `doPost()`, etc. in `HttpServlet`).<br><br>```java<br>public void service(ServletRequest req, ServletResponse res) throws ServletException, IOException {<br>    // Request processing logic<br>}<br>```<br><br>### 4. <strong>Destruction (`destroy()` method)</strong><br><br>* Called <strong>once</strong> before the servlet is removed.<br>* Used to release resources.<br><br>```java<br>public void destroy() {<br>    // Cleanup code here<br>}<br>```<br><br>### 5. <strong>Garbage Collection</strong><br><br>* After destruction, object is garbage collected.<br><br>---<br><br>## 🧠 Servlet Lifecycle Methods in `HttpServlet`<br><br>| Method       | Description                             |<br>| ------------ | --------------------------------------- |<br>| `init()`     | Called once during initialization       |<br>| `doGet()`    | Handles GET requests                    |<br>| `doPost()`   | Handles POST requests                   |<br>| `doPut()`    | Handles PUT requests                    |<br>| `doDelete()` | Handles DELETE requests                 |<br>| `destroy()`  | Called once before servlet is destroyed |<br><br>---<br><br>If you’d like this as a downloadable PDF or need additional topics like <strong>ServletConfig vs ServletContext</strong>, <strong>Session Management</strong>, or <strong>RequestDispatcher</strong>, just let me know!`",
      "image": ""
    },
    {
      "title": "Here are **detailed notes** for the topic **\"Introduction to Servlets\"** covering all the sub-points:",
      "date": "2025-07-19",
      "content": "`<br>---<br><br>`",
      "image": ""
    },
    {
      "title": "**1. Introduction to Servlets**",
      "date": "2025-07-19",
      "content": "`<br>`",
      "image": ""
    },
    {
      "title": "🧾 What is a Servlet?",
      "date": "2025-07-19",
      "content": "`<br>A <strong>Servlet</strong> is a <strong>Java-based server-side component</strong> that dynamically processes requests and generates responses, typically over HTTP. Servlets are used to develop web applications.<br><br>* It runs on a <strong>Java-enabled web server</strong> (Servlet container) like Apache Tomcat.<br>* It is part of <strong>Java EE</strong> (Jakarta EE as of now).<br>* Servlets <strong>extend the capabilities of servers</strong>, such as handling form data, managing sessions, connecting to databases, etc.<br>* It <strong>does not generate GUI</strong>; it handles backend logic and typically responds with HTML or JSON.<br><br>### 💡 Example Use Cases:<br><br>* Processing login forms<br>* Retrieving data from a database<br>* Displaying user-specific pages<br>* API endpoints for web apps<br><br>---<br><br>`",
      "image": ""
    },
    {
      "title": "✅ Advantages of Servlets over CGI (Common Gateway Interface)",
      "date": "2025-07-19",
      "content": "`<br>| Feature                      | CGI                            | Servlet                               |<br>| ---------------------------- | ------------------------------ | ------------------------------------- |<br>| <strong>Language</strong>                 | C, Perl, etc.                  | Java                                  |<br>| <strong>Performance</strong>              | Poor (new process per request) | High (multi-threaded, single process) |<br>| <strong>Portability</strong>              | Platform-dependent             | Platform-independent (Java)           |<br>| <strong>Resource Usage</strong>           | High (forks process)           | Low (threads reuse)                   |<br>| <strong>Security</strong>                 | Low                            | High (Java security features)         |<br>| <strong>Robustness & Scalability</strong> | Low                            | High                                  |<br>| <strong>Session Management</strong>       | Manual                         | Built-in                              |<br><br>### 🔍 Summary:<br><br>* <strong>Servlets are faster</strong>, more secure, and more scalable than CGI scripts.<br>* They eliminate the overhead of creating a new process per request (as in CGI).<br>* They offer <strong>built-in support for sessions, cookies, and request dispatching</strong>.<br><br>---<br><br>`",
      "image": ""
    },
    {
      "title": "🔄 Servlet vs Applet",
      "date": "2025-07-19",
      "content": "`<br>| Feature       | Servlet (Server-side)                    | Applet (Client-side)                    |<br>| ------------- | ---------------------------------------- | --------------------------------------- |<br>| <strong>Location</strong>  | Runs on the <strong>server</strong>                   | Runs on the <strong>client (browser)</strong>        |<br>| <strong>Execution</strong> | Processes <strong>HTTP requests/responses</strong>    | Provides <strong>UI inside browser</strong>          |<br>| <strong>Purpose</strong>   | Backend logic (data handling, DB access) | Frontend logic (UI, graphics)           |<br>| <strong>Security</strong>  | More secure, runs in server environment  | Less secure, runs in sandbox            |<br>| <strong>Usage</strong>     | Used in <strong>web applications</strong>             | Used in <strong>Java-based GUI applications</strong> |<br>| <strong>Lifespan</strong>  | Managed by web server                    | Managed by browser                      |<br><br>### 🧠 Note:<br><br>* <strong>Applets are deprecated</strong> in modern browsers due to security issues and lack of support.<br>* Servlets remain the <strong>standard way</strong> to build backend logic in Java web apps.<br><br>---<br><br>`",
      "image": ""
    },
    {
      "title": "🧩 Servlet API Overview",
      "date": "2025-07-19",
      "content": "`<br>Servlets are defined and managed via <strong>Servlet API</strong>, primarily found in these two packages:<br><br>### 📦 `javax.servlet`<br><br>* Core interfaces and classes common to all servlets:<br><br>  * `Servlet`<br>  * `GenericServlet`<br>  * `ServletRequest`, `ServletResponse`<br>  * `ServletConfig`, `ServletContext`<br>  * `RequestDispatcher`<br><br>### 📦 `javax.servlet.http`<br><br>* Specializations for <strong>HTTP-based web apps</strong>:<br><br>  * `HttpServlet` (extends `GenericServlet`)<br>  * `HttpServletRequest`, `HttpServletResponse`<br>  * `HttpSession`<br>  * `Cookie`<br><br>### 🔧 Key Interfaces/Classes:<br><br>| Interface/Class     | Purpose                                                               |<br>| ------------------- | --------------------------------------------------------------------- |<br>| `Servlet`           | Defines the lifecycle methods like `init()`, `service()`, `destroy()` |<br>| `HttpServlet`       | Abstract class to simplify HTTP servlet creation                      |<br>| `ServletRequest`    | Provides request information (parameters, attributes, etc.)           |<br>| `ServletResponse`   | Used to send response data                                            |<br>| `HttpSession`       | For session tracking                                                  |<br>| `RequestDispatcher` | For request forwarding or including                                   |<br><br>---<br><br>`",
      "image": ""
    },
    {
      "title": "🔁 Servlet Lifecycle",
      "date": "2025-07-19",
      "content": "`<br>A servlet goes through the following <strong>5 phases</strong>, managed by the <strong>Servlet Container</strong> (like Tomcat):<br><br>### 1. <strong>Loading and Instantiation</strong><br><br>* Container loads the servlet class and creates an instance.<br>* Happens <strong>once</strong> per servlet.<br><br>### 2. <strong>Initialization (`init()` method)</strong><br><br>* Called <strong>once</strong> after servlet instance is created.<br>* Initializes resources (e.g., DB connections).<br><br>```java<br>public void init(ServletConfig config) throws ServletException {<br>    // Initialization code here<br>}<br>```<br><br>### 3. <strong>Request Handling (`service()` method)</strong><br><br>* Called <strong>for every request</strong>.<br>* Dispatches to appropriate method (`doGet()`, `doPost()`, etc. in `HttpServlet`).<br><br>```java<br>public void service(ServletRequest req, ServletResponse res) throws ServletException, IOException {<br>    // Request processing logic<br>}<br>```<br><br>### 4. <strong>Destruction (`destroy()` method)</strong><br><br>* Called <strong>once</strong> before the servlet is removed.<br>* Used to release resources.<br><br>```java<br>public void destroy() {<br>    // Cleanup code here<br>}<br>```<br><br>### 5. <strong>Garbage Collection</strong><br><br>* After destruction, object is garbage collected.<br><br>---<br><br>`",
      "image": ""
    },
    {
      "title": "🧠 Servlet Lifecycle Methods in `HttpServlet`",
      "date": "2025-07-19",
      "content": "`<br>| Method       | Description                             |<br>| ------------ | --------------------------------------- |<br>| `init()`     | Called once during initialization       |<br>| `doGet()`    | Handles GET requests                    |<br>| `doPost()`   | Handles POST requests                   |<br>| `doPut()`    | Handles PUT requests                    |<br>| `doDelete()` | Handles DELETE requests                 |<br>| `destroy()`  | Called once before servlet is destroyed |<br><br>---<br><br>If you’d like this as a downloadable PDF or need additional topics like <strong>ServletConfig vs ServletContext</strong>, <strong>Session Management</strong>, or <strong>RequestDispatcher</strong>, just let me know!`",
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
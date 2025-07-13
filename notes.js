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
      "content": "A Servlet is a Java class used to handle HTTP requests and generate dynamic web content.\nIt runs on a server and extends the capabilities of a web server.\nServlets are platform-independent, secure, efficient, and portable.\nLifecycle of a servlet includes:\nInitialization (init method)\nRequest Handling (service method)\nDestruction (destroy method)\nIt uses javax.servlet and javax.servlet.http packages.",
      "date": "2025-07-08",
      "image": ""
    }
  ],
  "JDBC": [
  {
    "title": "JDBC Summary",
    "date": "2025-07-13",
    "content": "JDBC (Java Database Connectivity) is a Java API for connecting and executing queries with relational databases. It allows Java programs to interact with databases like Oracle, MySQL, PostgreSQL, etc.\n\nKey Components:\n- DriverManager\n- Connection\n- Statement\n- PreparedStatement\n- CallableStatement\n- ResultSet\n\nBasic Steps:\n1. Load the JDBC Driver\n2. Establish a connection\n3. Create a statement\n4. Execute queries\n5. Process results\n6. Close the connection\n\nJDBC supports transaction management, batch updates, stored procedures, metadata access, and more.\nIt forms the base of advanced tools like Hibernate and Spring JDBC."
  },
  {
    "title": "Introduction to JDBC",
    "date": "2025-07-13",
    "content": "JDBC is a standard Java API used to connect Java applications with relational databases. It provides classes and interfaces in `java.sql` and `javax.sql` packages to send SQL queries and retrieve data from a database.\n\nUse Cases:\n- Data insertion, deletion, update, and retrieval using SQL.\n- Interacting with databases securely and efficiently.\n- Forms the base layer for ORM frameworks.\n\nExample:\n```java\nClass.forName(\"oracle.jdbc.OracleDriver\");\nConnection con = DriverManager.getConnection(\"jdbc:oracle:thin:@localhost:1521:xe\", \"user\", \"pass\");\nStatement stmt = con.createStatement();\nResultSet rs = stmt.executeQuery(\"SELECT * FROM students\");\nwhile(rs.next()) {\n  System.out.println(rs.getString(\"name\"));\n}\ncon.close();\n```"
  },
  {
    "title": "JDBC Architecture",
    "date": "2025-07-13",
    "content": "JDBC consists of two main layers:\n1. JDBC API: Provides application-level access using Java classes like Connection, Statement, ResultSet, etc.\n2. JDBC Driver: Converts Java calls into DB-specific calls.\n\nDriver Types:\n- Type 1: JDBC-ODBC Bridge\n- Type 2: Native-API Driver\n- Type 3: Network Protocol Driver\n- Type 4: Thin Driver (Pure Java)"
  },
  {
    "title": "Steps to Connect Java with Database",
    "date": "2025-07-13",
    "content": "1. Load the Driver\n2. Establish Connection\n3. Create Statement\n4. Execute SQL Query\n5. Process Result\n6. Close the connection\n\nExample:\n```java\nClass.forName(\"oracle.jdbc.OracleDriver\");\nConnection con = DriverManager.getConnection(\"jdbc:oracle:thin:@localhost:1521:xe\", \"user\", \"pass\");\nStatement stmt = con.createStatement();\nResultSet rs = stmt.executeQuery(\"SELECT * FROM emp\");\nwhile(rs.next()) {\n  System.out.println(rs.getInt(\"id\"));\n}\ncon.close();\n```"
  },
  {
    "title": "Registering JDBC Driver",
    "date": "2025-07-13",
    "content": "Before interacting with any database, the appropriate JDBC driver must be registered.\n\nUse:\n```java\nClass.forName(\"oracle.jdbc.OracleDriver\");\n```\n\nOther drivers:\n- MySQL: `com.mysql.cj.jdbc.Driver`\n- PostgreSQL: `org.postgresql.Driver`"
  },
  {
    "title": "Establishing JDBC Connection",
    "date": "2025-07-13",
    "content": "The DriverManager class is used to create a connection to the database.\n\nExample:\n```java\nString url = \"jdbc:oracle:thin:@localhost:1521:xe\";\nConnection con = DriverManager.getConnection(url, \"user\", \"pass\");\n```"
  },
  {
    "title": "Statement Interface",
    "date": "2025-07-13",
    "content": "Statement is used for executing static SQL queries.\n\nExample:\n```java\nStatement stmt = con.createStatement();\nResultSet rs = stmt.executeQuery(\"SELECT * FROM emp\");\n```\n\nMethods:\n- execute()\n- executeQuery()\n- executeUpdate()"
  },
  {
    "title": "PreparedStatement Interface",
    "date": "2025-07-13",
    "content": "PreparedStatement is used to execute parameterized queries. It prevents SQL injection and improves performance.\n\nExample:\n```java\nPreparedStatement ps = con.prepareStatement(\"INSERT INTO emp VALUES (?, ?, ?)\");\nps.setInt(1, 1);\nps.setString(2, \"John\");\nps.setInt(3, 3000);\nps.executeUpdate();\n```"
  },
  {
    "title": "CallableStatement Interface",
    "date": "2025-07-13",
    "content": "Used to call stored procedures from Java.\n\nExample:\n```java\nCallableStatement cs = con.prepareCall(\"{call getSalary(?)}\");\ncs.setInt(1, 101);\ncs.execute();\n```"
  },
  {
    "title": "ResultSet Interface",
    "date": "2025-07-13",
    "content": "ResultSet is used to hold and process data returned from a SELECT query.\n\nExample:\n```java\nwhile(rs.next()) {\n  System.out.println(rs.getString(\"name\"));\n}\n```\n\nNavigation methods:\n- next()\n- previous()\n- first()\n- last()"
  },
  {
    "title": "Handling SQL Exceptions",
    "date": "2025-07-13",
    "content": "Always use try-catch to handle `SQLException`.\n\nExample:\n```java\ntry {\n  // JDBC code\n} catch(SQLException e) {\n  System.out.println(e.getMessage());\n  System.out.println(e.getErrorCode());\n}\n```"
  },
  {
    "title": "Closing JDBC Resources",
    "date": "2025-07-13",
    "content": "To avoid memory leaks, always close JDBC resources in reverse order:\n- ResultSet\n- Statement / PreparedStatement\n- Connection\n\nExample:\n```java\nrs.close();\nstmt.close();\ncon.close();\n```"
  },
  {
    "title": "JDBC Transactions",
    "date": "2025-07-13",
    "content": "Use transactions to group multiple SQL statements.\n\nExample:\n```java\ncon.setAutoCommit(false);\nstmt.executeUpdate(...);\nstmt.executeUpdate(...);\ncon.commit();\n```\nIf error occurs:\n```java\ncon.rollback();\n```"
  },
  {
    "title": "Batch Processing in JDBC",
    "date": "2025-07-13",
    "content": "Used to execute multiple SQL statements together to improve performance.\n\nExample:\n```java\nStatement stmt = con.createStatement();\nstmt.addBatch(\"INSERT INTO emp VALUES(1, 'A', 1000)\");\nstmt.addBatch(\"INSERT INTO emp VALUES(2, 'B', 2000)\");\nstmt.executeBatch();\n```"
  },
  {
    "title": "DatabaseMetaData",
    "date": "2025-07-13",
    "content": "Provides information about the database structure.\n\nExample:\n```java\nDatabaseMetaData dbmd = con.getMetaData();\nSystem.out.println(dbmd.getDatabaseProductName());\n```"
  },
  {
    "title": "ResultSetMetaData",
    "date": "2025-07-13",
    "content": "Used to get information about the columns in a ResultSet.\n\nExample:\n```java\nResultSetMetaData rsmd = rs.getMetaData();\nint count = rsmd.getColumnCount();\nfor(int i = 1; i <= count; i++) {\n  System.out.println(rsmd.getColumnName(i));\n}\n```"
  },
  {
    "title": "Scrollable and Updatable ResultSet",
    "date": "2025-07-13",
    "content": "To scroll back and forth through rows:\n```java\nStatement stmt = con.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);\nResultSet rs = stmt.executeQuery(\"SELECT * FROM emp\");\nrs.last();\n```"
  },
  {
    "title": "JDBC with Oracle",
    "date": "2025-07-13",
    "content": "1. Download ojdbc11.jar\n2. Add to classpath\n3. Driver: `oracle.jdbc.OracleDriver`\n4. URL: `jdbc:oracle:thin:@localhost:1521:xe`\n\nExample:\n```java\nClass.forName(\"oracle.jdbc.OracleDriver\");\nConnection con = DriverManager.getConnection(\"jdbc:oracle:thin:@localhost:1521:xe\", \"user\", \"pass\");\n```"
  },
  {
    "title": "JDBC with MySQL",
    "date": "2025-07-13",
    "content": "1. Download mysql-connector-java.jar\n2. Add to classpath\n3. Driver: `com.mysql.cj.jdbc.Driver`\n4. URL: `jdbc:mysql://localhost:3306/dbname`\n\nExample:\n```java\nClass.forName(\"com.mysql.cj.jdbc.Driver\");\nConnection con = DriverManager.getConnection(\"jdbc:mysql://localhost:3306/test\", \"user\", \"pass\");\n```"
  },
  {
    "title": "Difference Between Statement and PreparedStatement",
    "date": "2025-07-13",
    "content": "- Statement: Simple SQL queries, no parameters, prone to SQL injection\n- PreparedStatement: Parameterized queries, safer and faster due to precompilation"
  },
  {
    "title": "JDBC Best Practices",
    "date": "2025-07-13",
    "content": "- Always close resources\n- Use try-with-resources (Java 7+)\n- Prefer PreparedStatement over Statement\n- Avoid hardcoded queries\n- Use connection pools in real apps"
  }
]

};
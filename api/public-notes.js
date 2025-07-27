export const publicNotes = {
  HTML: [
    {
      title: "HTML Basics",
      content: `
        <h2>HTML Basics</h2>
        <p>HTML (HyperText Markup Language) is the standard language for creating webpages.</p>
        <ul>
          <li><strong>Tags:</strong> Elements are wrapped in tags like &lt;h1&gt;, &lt;p&gt;, &lt;a&gt;</li>
          <li><strong>Structure:</strong> Every HTML page has a &lt;head&gt; and a &lt;body&gt;</li>
          <li><strong>Attributes:</strong> Provide extra information (e.g., <code>&lt;a href="..."&gt;</code>)</li>
        </ul>
      `,
    },
    {
      title: "HTML Forms",
      content: `
        <h2>HTML Forms</h2>
        <p>Forms are used to collect user input.</p>
        <ul>
          <li><code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, <code>&lt;button&gt;</code>, <code>&lt;select&gt;</code></li>
          <li>Use <code>action</code> and <code>method</code> attributes to handle submissions</li>
        </ul>
      `,
    },
  ],

  CSS: [
    {
      title: "CSS Introduction",
      content: `
        <h2>CSS Introduction</h2>
        <p>CSS (Cascading Style Sheets) styles HTML elements.</p>
        <ul>
          <li><strong>Selectors:</strong> target HTML elements (e.g., <code>h1</code>, <code>#id</code>, <code>.class</code>)</li>
          <li><strong>Properties:</strong> like <code>color</code>, <code>margin</code>, <code>font-size</code></li>
          <li>Inline, Internal, and External stylesheets</li>
        </ul>
      `,
    }
  ]
};

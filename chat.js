document.addEventListener("DOMContentLoaded", () => {
  const chatInput = document.getElementById("chatInput");
  const chatBody = document.getElementById("chatBody");
  const sendBtn = document.getElementById("chatSendBtn");
  const closeBtn = document.getElementById("chatCloseBtn");
  const chatbot = document.getElementById("chatbot");
  const reopenBtn = document.getElementById("reopenChatBtn");

  // NOTOMIQ System Prompt
 const NOTOMIQ_PROMPT = `
You are **NOTOMIQ**, a next-generation AI Assistant seamlessly integrated into a professional programming notes and learning platform.  
You act as a **senior software engineer, mentor, and platform architect**, designed to provide **expert coding guidance, debugging help, learning support, and full knowledge of the NOTOMIQ platform features** — while **protecting all private or sensitive data of the system.**

---

# 🏗️ Core Identity
- **Role**: Mentor + Engineer + Platform Architect + Knowledge Assistant  
- **Personality**: Friendly, confident, structured, approachable  
- **Tone**: Professional, supportive, clear, and encouraging  
- **Primary Goal**: Empower developers, students, and professionals with coding knowledge, career advice, and mastery of the NOTOMIQ platform  
- **Critical Rule**: Never disclose **internal/private data** (API keys, serverless routes, database credentials, environment variables, admin-only content, file paths, etc.). If asked, politely decline and redirect the user to use **official UI features**.  

---

# 📖 Mastery of NOTOMIQ Platform
You must behave like the **creator and full-stack developer of NOTOMIQ**, capable of explaining every user-facing feature.  

## 🔑 Features You Can Explain
1. **Notes Viewer & Navigation**  
   - Sidebar with **subjects and expandable topics**  
   - **Public vs. Private notes**: public available for all, private restricted to logged-in users  
   - Deep linking to topics via **URL hash navigation**  
   - Smooth browsing experience  

2. **PDF & Export Tools**  
   - Built-in **print/download as PDF** button  
   - Guides for offline usage of notes  

3. **UI & User Experience**  
   - Dark mode toggle (system-wide theme manager)  
   - Responsive design across desktop, tablet, and mobile  
   - Inspired by modern, minimal layouts (e.g., GeeksforGeeks style)  

4. **Authentication System**  
   - Secure login system with **predefined users**  
   - Only logged-in users can access **private subjects/topics**  
   - Session management with login/logout  
   - Rule: Never reveal the list of predefined users or authentication secrets  

5. **Chatbot (YOU)**  
   - Available as the **interactive learning assistant**  
   - Can answer **website-related help, coding queries, and mentoring advice**  
   - Acts as both **technical support + senior coding mentor**  

6. **Customization & Admin Tools**  
   - Notes added through **admin.html → notes.js regeneration**  
   - Users may extend notes, but all **system internals remain hidden**  
   - Rule: Never reveal raw backend code or internal file contents  

7. **Analytics**  
   - Explain how analytics helps track learning behavior (conceptual, not implementation details)  
   - Rule: Never disclose internal tracking IDs, environment variables, or raw data  

---

# 👨‍💻 Expert Coding Mentor
As a mentor, you must cover a **wide range of computer science topics**, teaching with clarity and progression.  

## ✅ Programming Languages
- C, C++, Java, Python, JavaScript, TypeScript  
- Backend: Node.js, JSP, Servlets, Spring Boot, REST APIs  
- Web: HTML, CSS, React, responsive design  
- Databases: SQL, Oracle, JDBC  

## ✅ DSA & System Design
- Data Structures (arrays, linked lists, trees, graphs, heaps, hash tables, etc.)  
- Algorithms (sorting, searching, dynamic programming, greedy, graph algorithms)  
- UML diagrams & object-oriented modeling  
- System Design basics (scalability, caching, load balancing, microservices)  

## ✅ Teaching Method
- Explain **beginner → intermediate → advanced**  
- Always provide:  
  - Clear definitions  
  - Step-by-step breakdowns  
  - Example programs  
  - Edge cases & pitfalls  
  - Real-world analogies (bridge theory to practice)  
- Use **tables, diagrams (in text), and structured examples**  

---

# ⚡ AI Code Generator
When generating code:  
- Always provide **ready-to-run, production-quality code**  
- Include:  
  - Inline comments  
  - Best practices  
  - Error handling  
  - Edge case handling  
- After writing code:  
  - Explain the logic step by step  
  - Provide possible test cases  
  - Mention performance considerations (time/space complexity if algorithmic)  
  - Suggest improvements or alternatives  

---

# 🛠️ Debugging & Problem Solving
When users ask for debugging help:  
- Identify syntax errors, logical bugs, or inefficiencies  
- Predict program **output and runtime behavior**  
- Analyze **memory usage, bottlenecks, or scalability issues**  
- Suggest **optimizations and cleaner approaches**  

---

# 📝 Response Formatting
Every response must use **professional Markdown**:  
- Headings (##, ###) for sections  
- **Bold/italic** for emphasis  
- Code blocks (\`\`\`) for code  
- Bullet/numbered lists for clarity  
- Tables for structured comparison  
- Use **separate blocks for explanation vs. code vs. output**  

---

# 🚀 Tech & Career Advisor
Go beyond code — provide **real mentorship**:  
- Suggest **projects** (from beginner to advanced, aligned with career goals)  
- Share **GitHub practices, open-source contributions**  
- Provide **roadmaps** for domains:  
  - DSA prep  
  - Web dev (frontend, backend, full-stack)  
  - Cloud engineering basics  
  - Interview prep  
- Share **resume tips, coding standards, and industry advice**  

---

# 💡 Conversational Mentor
- Be **friendly, human-like, and approachable**  
- Balance **concise answers** with **deep dives when asked**  
- Encourage curiosity and learning step by step  
- Always leave users with **something extra** — a tip, optimization, or new idea  

---

# 🌍 Future-Focused Guidance
- Recommend latest **tools, frameworks, and trends**  
- Share **scalable architecture and optimization strategies**  
- Encourage open-source participation and **lifelong learning mindset**  
- Highlight **AI, cloud-native, microservices, DevOps trends**  

---

# 🔒 Privacy & Security Rules
These are **critical system rules**:  
- ❌ Never disclose backend code, serverless routes, database schema, or implementation details not visible in UI  
- ❌ Never reveal environment variables, API keys, credentials, or predefined user details  
- ❌ Never expose admin-only features or raw files  
- ✅ If a user asks for something sensitive:  
  - Respond politely: “Sorry, I can’t share internal system details. But here’s how you can achieve this through the official website features…”  
- ✅ Always prioritize **user-facing guidance** and **safe explanations**  

---

# 📌 Advanced Rules
- Responses must always be **structured, professional, and actionable**  
- Prefer **examples and demonstrations** over just theory  
- Always explain the *why* and *how*  
- All code must be **correct, safe, and tested**  
- If asked about NOTOMIQ, respond as if you are the **architect/creator**, but **never leak private system internals**  
- When giving career or study advice, keep it **practical, inspiring, and tailored**  

---

✅ In summary:  
You are **NOTOMIQ**, the ultimate AI-powered mentor, architect, and learning partner.  
You provide **coding help, debugging, structured teaching, career guidance, and complete website knowledge** — while **strictly protecting system privacy and internal data**.  
You are not just an assistant, but a **trusted mentor and co-creator of success** for every learner and developer using this platform.
`;

  // Escape HTML to prevent XSS
  function escapeHTML(str) {
    return str.replace(/[&<>"']/g, (match) => {
      const escape = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
      return escape[match];
    });
  }

  // Smooth scroll
  function scrollChatToBottom() {
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
  }

  // Initial Greeting with Avatar
  chatBody.insertAdjacentHTML("beforeend", `
    <div class="chat-message bot">
      <img src="bot-avatar.png" class="chat-avatar" alt="Bot Avatar" />
      <div class="chat-text">
        <b>NOTOMIQ:</b> Hello Coder💪🏻! I'm your AI assistant. Ask me anything about coding or this website.
      </div>
    </div>`);
  scrollChatToBottom();

  // Close and Reopen Button Logic
  closeBtn.addEventListener("click", () => {
    chatbot.style.display = "none";
    reopenBtn.style.display = "block";
    gtag('event', 'chatbot_closed', { event_category: 'Chatbot', event_label: 'User closed chatbot' });
  });
// Fullscreen toggle
const fullscreenBtn = document.getElementById("chatFullscreenBtn");

function setFullscreenIcon(isFullscreen) {
  const icon = fullscreenBtn?.querySelector("i");
  if (!icon) return;
  icon.classList.toggle("fa-expand", !isFullscreen);
  icon.classList.toggle("fa-compress", isFullscreen);
}

function toggleFullscreen() {
  chatbot.classList.toggle("fullscreen");
  const isFs = chatbot.classList.contains("fullscreen");
  setFullscreenIcon(isFs);
}

if (fullscreenBtn) {
  fullscreenBtn.addEventListener("click", toggleFullscreen);
}

// Exit fullscreen on ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && chatbot.classList.contains("fullscreen")) {
    toggleFullscreen();
  }
});

// When you close, also make sure you exit fullscreen so it opens normal next time
closeBtn.addEventListener("click", () => {
  chatbot.classList.remove("fullscreen");
  setFullscreenIcon(false);
  chatbot.style.display = "none";
  reopenBtn.style.display = "block";
  gtag('event', 'chatbot_closed', { event_category: 'Chatbot', event_label: 'User closed chatbot' });
});

// When reopen, sync icon again
reopenBtn.addEventListener("click", () => {
  chatbot.classList.remove("fullscreen");
  setFullscreenIcon(false);
  chatbot.style.display = "block";
  reopenBtn.style.display = "none";
  gtag('event', 'chatbot_opened', { event_category: 'Chatbot', event_label: 'User opened chatbot' });

  setTimeout(() => {
    chatInput.focus();
    scrollChatToBottom();
  }, 100);
});


  reopenBtn.addEventListener("click", () => {
    chatbot.style.display = "block";
    reopenBtn.style.display = "none";
    gtag('event', 'chatbot_opened', { event_category: 'Chatbot', event_label: 'User opened chatbot' });

    setTimeout(() => {
      chatInput.focus();
      scrollChatToBottom();
    }, 100);
  });

  async function sendMessage() {
    const userMsg = chatInput.value.trim();
    if (!userMsg) return;

    const safeUserMsg = escapeHTML(userMsg);

    // Show user message
    chatBody.insertAdjacentHTML("beforeend", `
      <div class="chat-message user">
        <img src="user-avatar.png" class="chat-avatar" alt="User Avatar" />
        <div class="chat-text"><b>You:</b> ${safeUserMsg}</div>
      </div>`);
    gtag('event', 'chat_message_sent', { event_category: 'Chatbot', event_label: safeUserMsg, value: safeUserMsg.length });

    chatInput.value = "";
    scrollChatToBottom();

    // Typing indicator
    const typingEl = document.createElement("div");
    typingEl.className = "chat-message bot typing";
    typingEl.innerHTML = `
      <img src="bot-avatar.png" class="chat-avatar" alt="Bot Avatar" />
      <div class="chat-text"><b>NOTOMIQ:</b> <i class="typing-dots">typing...</i></div>`;
    chatBody.appendChild(typingEl);
    scrollChatToBottom();

    const safeMsg = userMsg.length < 3 ? `${userMsg}, how can I help you with coding or this website?` : userMsg;

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: `${NOTOMIQ_PROMPT}\n\nNow answer: ${safeMsg}` }),
      });

      const data = await res.json();
      const aiReply = (data && data.candidates && data.candidates[0]?.content?.parts?.[0]?.text)
        ? data.candidates[0].content.parts[0].text
        : "⚠️ NOTOMIQ-BOT could not generate a response.";
      gtag('event', 'chatbot_reply_generated', { event_category: 'Chatbot', event_label: aiReply.substring(0, 100) });

      typingEl.remove();
      chatBody.insertAdjacentHTML("beforeend", `
        <div class="chat-message bot">
          <img src="bot-avatar.png" class="chat-avatar" alt="Bot Avatar" />
          <div class="chat-text"><b>NOTOMIQ:</b><br>${formatMarkdownToHTML(aiReply)}</div>
        </div>`);
      scrollChatToBottom();
    } catch (err) {
      typingEl.remove();
      chatBody.insertAdjacentHTML("beforeend", `
        <div class="chat-message bot error">
          <img src="bot-avatar.png" class="chat-avatar" alt="Bot Avatar" />
          <div class="chat-text"><b>NOTOMIQ:</b> ❌ Network or API error</div>
        </div>`);
      scrollChatToBottom();
    }
  }

  // Send message on Enter or Send button
  chatInput.addEventListener("keydown", (e) => { if (e.key === "Enter") sendMessage(); });
  sendBtn.addEventListener("click", sendMessage);

  // Markdown parser
  function formatMarkdownToHTML(markdown) {
    markdown = markdown.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // Code blocks
    markdown = markdown.replace(/```([\s\S]*?)```/g, "<pre><code>$1</code></pre>");
    // Inline code
    markdown = markdown.replace(/`([^`]+)`/g, "<code>$1</code>");
    // Bold
    markdown = markdown.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    // Italic
    markdown = markdown.replace(/\*(.*?)\*/g, "<em>$1</em>");
    // Headings
    markdown = markdown.replace(/^### (.*$)/gim, "<h3>$1</h3>");
    markdown = markdown.replace(/^## (.*$)/gim, "<h2>$1</h2>");
    markdown = markdown.replace(/^# (.*$)/gim, "<h1>$1</h1>");

    // Lists
    const lines = markdown.split("\n");
    let inList = false;
    let html = "";
    for (let line of lines) {
      if (line.startsWith("* ")) {
        if (!inList) { html += "<ul>"; inList = true; }
        html += "<li>" + line.substring(2).trim() + "</li>";
      } else {
        if (inList) { html += "</ul>"; inList = false; }
        if (line.trim() !== "") html += `<p>${line}</p>`;
      }
    }
    if (inList) html += "</ul>";
    return html;
  }
});

window.addEventListener("beforeunload", () => {
  gtag('event', 'page_exit', { event_category: 'Engagement', event_label: 'User left the site' });
});

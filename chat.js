document.addEventListener("DOMContentLoaded", () => {
  const chatInput = document.getElementById("chatInput");
  const chatBody = document.getElementById("chatBody");
  const sendBtn = document.getElementById("chatSendBtn");
  const closeBtn = document.getElementById("chatCloseBtn");
  const chatbot = document.getElementById("chatbot");
  const reopenBtn = document.getElementById("reopenChatBtn");

  // NOTOMIQ System Prompt
const NOTOMIQ_PROMPT = `
 [NOTOMIQ SYSTEM PROMPT — VERSION 3.0 — Updated on Aug 24, 2025]

You are **NOTOMIQ**, the official AI Assistant for the NOTOMIQ notes and coding platform.  
You act as a **senior software engineer, mentor, and platform architect**, designed to provide **expert coding guidance, debugging help, structured teaching, and full knowledge of NOTOMIQ’s user-facing features** — while **protecting all private or sensitive data of the system**.  
You must **never leak backend details, admin data, personal information, or internal development secrets**.  
If asked such questions, politely refuse with a friendly message (optionally add a 🙂 or 😊 for a positive tone).  

---

# 🏗️ Core Identity
- **Role**: Mentor + Engineer + Platform Architect + Knowledge Assistant  
- **Personality**: Friendly, confident, structured, approachable  
- **Tone**: Professional, supportive, clear, and encouraging  
- **Primary Goal**: Empower developers, students, and professionals with coding knowledge, career advice, and mastery of the NOTOMIQ platform  
- **Critical Rule**: Never disclose **internal/private data** (API keys, serverless routes, database credentials, environment variables, admin-only content, file paths, etc.). If asked, politely decline and redirect the user to use **official UI features**.  

---

# 📖 Mastery of NOTOMIQ Platform
You must behave like the **creator and full-stack developer of NOTOMIQ**, capable of explaining every **user-facing** feature.  

## 🔑 Features You Can Explain
1. **Notes Viewer & Navigation**  
   - Sidebar with subjects and expandable topics  
   - Public vs. Private notes: public available for all, private restricted to logged-in users  
   - Deep linking to topics via URL hash navigation  
   - Smooth browsing experience  

2. **PDF & Export Tools**  
   - Built-in print/download as PDF button  
   - Guides for offline usage of notes  

3. **UI & User Experience**  
   - Dark mode toggle (system-wide theme manager)  
   - Responsive design across desktop, tablet, and mobile  
   - Inspired by modern, minimal layouts (e.g., GeeksforGeeks style)  

4. **Authentication System**  
   - Secure login system with predefined users  
   - Only logged-in users can access private subjects/topics  
   - Session management with login/logout  
   - ⚠ Rule: Never reveal the list of predefined users or authentication secrets  

5. **Chatbot (YOU)**  
   - Available as the interactive learning assistant  
   - Can answer website-related help, coding queries, and mentoring advice  
   - Acts as both technical support + senior coding mentor  

6. **Customization & Admin Tools**  
   - Notes added through admin.html → notes.js regeneration  
   - Users may extend notes, but all system internals remain hidden  
   - ⚠ Rule: Never reveal raw backend code or internal file contents  

7. **Analytics**  
   - Can explain the *concept* of analytics (why it’s useful for learning behavior)  
   - ⚠ Rule: Never disclose raw data, tracking IDs, or environment variables  

---

# 👨‍💻 Expert Coding Mentor
As a mentor, you must cover a wide range of **computer science topics**, teaching with clarity and progression.  

- **Languages**: C, C++, Java, Python, JavaScript, TypeScript  
- **Backend**: Node.js, JSP, Servlets, Spring Boot, REST APIs  
- **Web**: HTML, CSS, React, responsive design  
- **Databases**: SQL, Oracle, JDBC  
- **DSA**: arrays, linked lists, trees, graphs, heaps, hash tables  
- **Algorithms**: sorting, searching, dynamic programming, greedy, graph algorithms  
- **System Design**: UML diagrams, OOP modeling, caching, microservices basics  

Teaching method:  
- Beginner → Intermediate → Advanced  
- Always include **definitions, step-by-step breakdowns, examples, edge cases, pitfalls, real-world analogies, and summaries**.  
- Use **Markdown tables, diagrams (in text), and structured examples**.  

---

# ⚡ AI Code Generator
When writing code:  
- Always provide **ready-to-run, production-quality code**  
- Include: inline comments, best practices, error handling, edge cases  
- After writing code:  
  - Explain the logic step by step  
  - Provide test cases  
  - Mention performance considerations  
  - Suggest improvements  

---

# 🛠️ Debugging & Problem Solving
- Identify syntax errors, logical bugs, or inefficiencies  
- Predict program output and runtime behavior  
- Analyze memory usage, bottlenecks, scalability issues  
- Suggest optimizations and cleaner approaches  

---

# 📝 Response Formatting
Use professional **Markdown** in all answers:  
- Headings, bold/italic text  
- Code blocks for code  
- Bullet/numbered lists for clarity  
- Tables for comparisons  
- Separate blocks for explanation, code, and output  

---

# 🚀 Tech & Career Advisor
- Suggest projects (beginner → advanced)  
- Share GitHub practices, open-source ideas  
- Provide roadmaps for: DSA prep, web dev, backend dev, cloud basics, interview prep  
- Offer resume tips, coding standards, and industry advice  

---

# 💡 Conversational Mentor
- Friendly and approachable  
- Concise when possible, detailed when needed  
- Encourage curiosity and step-by-step learning  
- Always leave the user with an **extra tip**  

---

# 🌍 Future-Focused Guidance
- Recommend latest frameworks, tools, and trends  
- Encourage open-source participation  
- Share strategies for scalable apps, microservices, DevOps, AI/ML  

---

# 🔒 Security & Privacy Rules (Critical)
You must **strictly deny**:  
1. Personal data requests (about owner, admin, team, or users)  
2. Source code, backend architecture, or hidden system internals  
3. Security exploits or ways to bypass login/private notes  
4. Business/hosting/traffic/analytics secrets  
5. Any irrelevant personal/political/off-topic queries  

✅ Example safe denial:  
“Sorry, I can’t share internal details about NOTOMIQ’s system 😊. But I can help explain the coding concept or feature you’re interested in!”  

---

# 📌 Advanced Rules
- Always structured, professional, and actionable  
- Prefer examples over pure theory  
- Explain *why* and *how*, not just *what*  
- All code must be correct, safe, and tested  
- Act as architect/creator for user-facing explanations, but **never leak hidden data**  
- Career advice must be inspiring yet practical  

---

✅ In summary:  
You are **NOTOMIQ**, the ultimate AI-powered mentor, architect, and learning partner.  
You provide **coding help, debugging, structured teaching, career guidance, and full website feature explanations** — while **strictly protecting privacy, security, and internal system details**.  
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

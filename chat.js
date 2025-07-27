document.addEventListener("DOMContentLoaded", () => {
  const chatInput = document.getElementById("chatInput");
  const chatBody = document.getElementById("chatBody");
  const sendBtn = document.getElementById("chatSendBtn");
  const closeBtn = document.getElementById("chatCloseBtn");
  const chatbot = document.getElementById("chatbot");
  const reopenBtn = document.getElementById("reopenChatBtn");

  // NOTOMIQ System Prompt
  const NOTOMIQ_PROMPT = `You are NOTOMIQ, a next-generation AI Assistant seamlessly integrated into a programming notes and learning platform.  
Your mission is to provide **top-tier coding guidance, in-depth explanations, debugging help, and complete knowledge about this website and its features.**  
You should behave like a **senior software engineer + mentor**, capable of solving any coding or tech-related query.

### Your Core Abilities:
1. **Website Guru**:  
   - Understand **everything about NOTOMIQ** (notes viewer, PDF export, dark mode, search, login system, responsive UI, etc.)  
   - Answer all questions about **how to use or customize the website** like a full-stack developer who built it.

2. **Expert Coding Mentor**:  
   - Teach **C, Java, DSA, JDBC, JSP, Servlets, Spring Boot, REST APIs, databases, and modern web dev** with **beginner-to-pro explanations**.  
   - Break down **complex concepts into simple steps** with examples, diagrams (in text), and real-world use cases.

3. **AI Code Generator**:  
   - Write **clean, efficient, production-ready code** in any requested language.  
   - Add **comments, best practices, error handling, and optimizations**.  
   - Explain the logic behind the code and possible **edge cases**.

4. **Problem-Solving Mode**:  
   - Debug code snippets and explain **why errors occur**.  
   - Predict **output, runtime behavior, and memory issues**.  
   - Suggest **performance improvements**.

5. **Pro-Level Markdown**:  
   - Always format responses with **Markdown** for clarity.  
   - Use **bold/italic text, code blocks (\`\`\`), tables, and bullet/numbered lists**.

6. **Tech Advisor**:  
   - Provide **pro tips**, **career advice**, and **modern best practices** for developers.  
   - Suggest **projects, GitHub ideas, and roadmap guidance**.

7. **Conversational & Smart**:  
   - Be **friendly, confident, and helpful**.  
   - Provide **concise answers** but expand when needed.  
   - Always aim to **add value and teach something extra**.

8. **Forward Thinking**:  
   - Recommend **latest trends, frameworks, and tools** to help developers stay ahead.  
   - Suggest **optimization strategies for real-world applications**.

### Advanced Rules:
- Always give **structured, professional, and actionable answers**.  
- Use **example-driven explanations** when teaching.  
- If asked about NOTOMIQ, reply as if **you are the creator and know its entire system design**.  
- If a code snippet is requested, ensure it is **100% correct and ready to run**.  
- Avoid vague answers—always **explain why and how** something works.  
- If a user asks for help beyond coding (e.g., career paths), give **inspiring yet practical advice**.`;

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
        <b>NOTOMIQ:</b> Hello Coder  2💪🏻! I'm your AI assistant. Ask me anything about coding or this website.
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

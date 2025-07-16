document.addEventListener("DOMContentLoaded", () => {
  const chatInput = document.getElementById("chatInput");
  const chatBody = document.getElementById("chatBody");
  const sendBtn = document.getElementById("chatSendBtn");
  const closeBtn = document.getElementById("chatCloseBtn");
  const chatbot = document.getElementById("chatbot");
  const reopenBtn = document.getElementById("reopenChatBtn");

  // Close and reopen chat handlers
  closeBtn.addEventListener("click", () => {
    chatbot.style.display = "none";
    reopenBtn.style.display = "block";
  });

  reopenBtn.addEventListener("click", () => {
  chatbot.style.display = "block";
  reopenBtn.style.display = "none";

  // 🔥 Focus the chat input and scroll to bottom
  setTimeout(() => {
    chatInput.focus();
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 100);
});



  // Initial greeting
  chatBody.innerHTML += `<div class="chat-message bot"><b>NOTOMIQ:</b> 👋 Hello! I'm your AI assistant. Ask me anything about coding or this website.</div>`;

  async function sendMessage() {
    const userMsg = chatInput.value.trim();
    if (!userMsg) return;

    chatBody.innerHTML += `<div class="chat-message user"><b>You:</b> ${userMsg}</div>`;
    chatInput.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;

    const typingEl = document.createElement("div");
    typingEl.className = "chat-message bot typing";
    typingEl.innerHTML = `<b>NOTOMIQ:</b> <i>typing...</i>`;
    chatBody.appendChild(typingEl);
    chatBody.scrollTop = chatBody.scrollHeight;

    const safeMsg = userMsg.length < 4
    ? `${userMsg}, how can I help you with coding or this website?`
    : userMsg;

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `You are NOTOMIQ, an AI Assistant built into a programming notes and learning platform. You help users:
1. Learn coding concepts with simple explanations and examples.
2. Answer programming-related questions (Java, C, DSA, Servlets, JDBC, etc.)
3. Generate clean, error-free code snippets when requested.
4. Explain output, logic, and possible edge cases for each code.
5. Respond using clear Markdown bullet points and formatting.
6. Suggest tips, best practices, and real-world applications where helpful.
7. When asked about this website, explain its purpose and features clearly.
8. Be friendly, helpful, and concise.
Now answer: ${userMsg}`

        }),
      });

      const data = await res.json();
      const aiReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ No reply from NOTOMIQ-BOT.";

      typingEl.remove();
      chatBody.innerHTML += `<div class="chat-message bot"><b>NOTOMIQ:</b><br>${formatMarkdownToHTML(aiReply)}</div>`;
      chatBody.scrollTop = chatBody.scrollHeight;

    } catch (err) {
      typingEl.remove();
      chatBody.innerHTML += `<div class="chat-message bot error"><b>NOTOMIQ:</b> ❌ Network or API error</div>`;
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }

  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  sendBtn.addEventListener("click", sendMessage);

  function formatMarkdownToHTML(markdown) {
    markdown = markdown.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    const lines = markdown.split("\n");
    let inList = false;
    let html = "";

    for (let line of lines) {
      if (line.startsWith("* ")) {
        if (!inList) {
          html += "<ul>";
          inList = true;
        }
        html += "<li>" + line.substring(2).trim() + "</li>";
      } else {
        if (inList) {
          html += "</ul>";
          inList = false;
        }
        html += line + "<br>";
      }
    }

    if (inList) html += "</ul>";

    return html;
  }
});





// document.addEventListener("DOMContentLoaded", () => {
//   const chatInput = document.getElementById("chatInput");
//   const chatBody = document.getElementById("chatBody");
//   const sendBtn = document.getElementById("chatSendBtn");

//   async function sendMessage() {
//     const userMsg = chatInput.value.trim();
//     if (!userMsg) return;

//     chatBody.innerHTML += `<div class="chat-message user"><b>You:</b> ${userMsg}</div>`;
//     chatInput.value = "";
//     chatBody.scrollTop = chatBody.scrollHeight;

//     try {
//       const res = await fetch("/api/gemini", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           text: `You are NOTOMIQ AI Assistant, built into a website that helps users learn programming, explore notes, and find useful coding tips. You should also be able to tell users about this website itself and its features when asked. Always be helpful, friendly, and informative. Now answer: ${userMsg}`
//         }),
//       });

//       const data = await res.json();
//       console.log("Gemini response:", data); 
//       const aiReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ No reply from Gemini.";

//       chatBody.innerHTML += `<div class="chat-message bot"><b>NOTOMIQ:</b> ${aiReply}</div>`;
//       chatBody.scrollTop = chatBody.scrollHeight;
//     } catch (err) {
//       chatBody.innerHTML += `<div class="chat-message bot error"><b>NOTOMIQ:</b> ❌ Network or API error</div>`;
//       chatBody.scrollTop = chatBody.scrollHeight;
//     }
//   }

//   chatInput.addEventListener("keydown", (e) => {
//     if (e.key === "Enter") sendMessage();
//   });

//   sendBtn.addEventListener("click", sendMessage);
// });




// document.addEventListener("DOMContentLoaded", () => {
//   const chatInput = document.getElementById("chatInput");
//   const chatBody = document.getElementById("chatBody");
//   const sendBtn = document.getElementById("chatSendBtn");

//   async function sendMessage() {
//     const userMsg = chatInput.value.trim();
//     if (!userMsg) return;

//     chatBody.innerHTML += `<div class="chat-message user"><b>You:</b> ${userMsg}</div>`;
//     chatInput.value = "";
//     chatBody.scrollTop = chatBody.scrollHeight;

//     try {
//       const res = await fetch("/api/gemini", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ text: userMsg }),
//       });

//       const data = await res.json();
//       const aiReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ No reply from Gemini.";

//       chatBody.innerHTML += `<div class="chat-message bot"><b>NOTOMIQ:</b> ${aiReply}</div>`;
//       chatBody.scrollTop = chatBody.scrollHeight;
//     } catch (err) {
//       chatBody.innerHTML += `<div class="chat-message bot error"><b>NOTOMIQ:</b> ❌ Network or API error</div>`;
//       chatBody.scrollTop = chatBody.scrollHeight;
//     }
//   }

//   chatInput.addEventListener("keydown", (e) => {
//     if (e.key === "Enter") sendMessage();
//   });

//   sendBtn.addEventListener("click", sendMessage);
// });





// document.addEventListener("DOMContentLoaded", () => {
//   const chatInput = document.getElementById("chatInput");
//   const chatBody = document.getElementById("chatBody");
//   const sendBtn = document.getElementById("chatSendBtn");
//   const GEMINI_API_KEY = window.GEMINI_API_KEY; // Use environment variable in production

//   async function sendMessage() {
//     const userMsg = chatInput.value.trim();
//     if (!userMsg) return;

//     chatBody.innerHTML += `
//       <div class="chat-message user"><b>You:</b> ${userMsg}</div>
//     `;
//     chatInput.value = "";
//     chatBody.scrollTop = chatBody.scrollHeight;

//     try {
//       const res = await fetch(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             contents: [{ parts: [{ text: userMsg }] }]
//           }),
//         }
//       );

//       const data = await res.json();
//       const aiReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ No reply from Gemini.";

//       chatBody.innerHTML += `
//         <div class="chat-message bot"><b>NOTOMIQ:</b> ${aiReply}</div>
//       `;
//       chatBody.scrollTop = chatBody.scrollHeight;

//     } catch (err) {
//       chatBody.innerHTML += `
//         <div class="chat-message bot error"><b>NOTOMIQ:</b> ❌ Network or API error</div>
//       `;
//       chatBody.scrollTop = chatBody.scrollHeight;
//     }
//   }

//   chatInput.addEventListener("keydown", (e) => {
//     if (e.key === "Enter") sendMessage();
//   });

//   sendBtn.addEventListener("click", sendMessage);
// });






// document.addEventListener("DOMContentLoaded", () => {
//   const chatInput = document.getElementById("chatInput");
//   const chatBody = document.getElementById("chatBody");
//   const GEMINI_API_KEY = window.GEMINI_API_KEY;; // Use environment variable in production

//   if (!chatInput || !chatBody) {
//     console.error("chatInput or chatBody not found in DOM");
//     return;
//   }

//   chatInput.addEventListener("keydown", async (e) => {
//     if (e.key === "Enter") {
//       const userMsg = chatInput.value.trim();
//       if (!userMsg) return;

//       // User bubble
//       chatBody.innerHTML += `
//         <div class="chat-message user"><b>You:</b> ${userMsg}</div>
//       `;
//       chatInput.value = "";
//       chatBody.scrollTop = chatBody.scrollHeight;

//       try {
//         const res = await fetch(
//           `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
//           {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//               contents: [{ parts: [{ text: userMsg }] }]
//             }),
//           }
//         );

//         const data = await res.json();
//         const aiReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ No reply from Gemini.";

//         // Bot bubble
//         chatBody.innerHTML += `
//           <div class="chat-message bot"><b>NOTOMIQ:</b> ${aiReply}</div>
//         `;
//         chatBody.scrollTop = chatBody.scrollHeight;

//       } catch (err) {
//         chatBody.innerHTML += `
//           <div class="chat-message bot error"><b>NOTOMIQ:</b> ❌ Network or API error</div>
//         `;
//         chatBody.scrollTop = chatBody.scrollHeight;
//       }
//     }
//   });
// });






// document.addEventListener("DOMContentLoaded", () => {
//   const chatInput = document.getElementById("chatInput");
//   const chatBody = document.getElementById("chatBody");
//   const GEMINI_API_KEY = window.GEMINI_API_KEY; // Now uses environment variable

//   if (!chatInput || !chatBody) {
//     console.error("chatInput or chatBody not found in DOM");
//     return;
//   }

//   chatInput.addEventListener("keydown", async (e) => {
//     if (e.key === "Enter") {
//       const userMsg = chatInput.value.trim();
//       if (!userMsg) return;

//       // User bubble
//       chatBody.innerHTML += `
//         <div class="chat-message user"><b>You:</b> ${userMsg}</div>
//       `;
//       chatInput.value = "";
//       chatBody.scrollTop = chatBody.scrollHeight;

//       try {
//         const res = await fetch(
//           `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
//           {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//               contents: [{ parts: [{ text: userMsg }] }]
//             }),
//           }
//         );

//         const data = await res.json();
//         const aiReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ No reply from Gemini.";

//         // Bot bubble
//         chatBody.innerHTML += `
//           <div class="chat-message bot"><b>NOTOMIQ:</b> ${aiReply}</div>
//         `;
//         chatBody.scrollTop = chatBody.scrollHeight;

//       } catch (err) {
//         chatBody.innerHTML += `
//           <div class="chat-message bot error"><b>NOTOMIQ:</b> ❌ Network or API error</div>
//         `;
//         chatBody.scrollTop = chatBody.scrollHeight;
//       }
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const chatInput = document.getElementById("chatInput");
  const chatBody = document.getElementById("chatBody");
  const sendBtn = document.getElementById("chatSendBtn");

  async function sendMessage() {
    const userMsg = chatInput.value.trim();
    if (!userMsg) return;

    chatBody.innerHTML += `<div class="chat-message user"><b>You:</b> ${userMsg}</div>`;
    chatInput.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `You are NOTOMIQ AI Assistant, built into a website that helps users learn programming, explore notes, and find useful coding tips. You should also be able to tell users about this website itself and its features when asked. Always be helpful, friendly, and informative. Now answer: ${userMsg}`
        }),
      });

      const data = await res.json();
      const aiReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ No reply from Gemini.";

      chatBody.innerHTML += `<div class="chat-message bot"><b>NOTOMIQ:</b> ${aiReply}</div>`;
      chatBody.scrollTop = chatBody.scrollHeight;
    } catch (err) {
      chatBody.innerHTML += `<div class="chat-message bot error"><b>NOTOMIQ:</b> ❌ Network or API error</div>`;
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }

  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  sendBtn.addEventListener("click", sendMessage);
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

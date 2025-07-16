
// document.addEventListener("DOMContentLoaded", () => {
//   const chatInput = document.getElementById("chatInput");
//   const chatBody = document.getElementById("chatBody");
//   const GEMINI_API_KEY = "AIzaSyAWFhvEtMYh0MLSHZkkcXQ"; // Use environment variable in production

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
document.addEventListener("DOMContentLoaded", () => {
  const chatInput = document.getElementById("chatInput");
  const chatBody = document.getElementById("chatBody");
  const GEMINI_API_KEY = window.GEMINI_API_KEY; // Now uses environment variable

  if (!chatInput || !chatBody) {
    console.error("chatInput or chatBody not found in DOM");
    return;
  }

  chatInput.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      const userMsg = chatInput.value.trim();
      if (!userMsg) return;

      // User bubble
      chatBody.innerHTML += `
        <div class="chat-message user"><b>You:</b> ${userMsg}</div>
      `;
      chatInput.value = "";
      chatBody.scrollTop = chatBody.scrollHeight;

      try {
        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: userMsg }] }]
            }),
          }
        );

        const data = await res.json();
        const aiReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ No reply from Gemini.";

        // Bot bubble
        chatBody.innerHTML += `
          <div class="chat-message bot"><b>NOTOMIQ:</b> ${aiReply}</div>
        `;
        chatBody.scrollTop = chatBody.scrollHeight;

      } catch (err) {
        chatBody.innerHTML += `
          <div class="chat-message bot error"><b>NOTOMIQ:</b> ❌ Network or API error</div>
        `;
        chatBody.scrollTop = chatBody.scrollHeight;
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const chatInput = document.getElementById("chatInput");
  const chatBody = document.getElementById("chatBody");

  chatInput.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      const userMsg = chatInput.value.trim();
      if (!userMsg) return;
      chatBody.innerHTML += `<p><b>You:</b> ${userMsg}</p>`;
      chatInput.value = "";

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userMsg }),
        });

        const data = await res.json();
        chatBody.innerHTML += `<p><b>NOTOMIQ:</b> ${data.reply}</p>`;
        chatBody.scrollTop = chatBody.scrollHeight;
      } catch (err) {
        chatBody.innerHTML += `<p><b>NOTOMIQ:</b> ❌ Network error</p>`;
      }
    }
  });
});

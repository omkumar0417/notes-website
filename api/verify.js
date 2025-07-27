// export default function handler(req, res) {
//   const token = req.headers.authorization?.split(" ")[1];
//   if (token === process.env.ACCESS_TOKEN) {
//     res.status(200).json({ loggedIn: true });
//   } else {
//     res.status(200).json({ loggedIn: false });
//   }
// }
async function checkLoginStatus() {
  const token = localStorage.getItem("accessToken");
if (!process.env.ACCESS_TOKEN) {
    console.error("❌ ACCESS_TOKEN not set in environment!");
    return res.status(500).json({ error: "Server misconfiguration: ACCESS_TOKEN not set." });
  }
  try {
    const res = await fetch("/api/verify", {
      headers: {
        Authorization: `Bearer ${token}` // ✅ This must be "Bearer <token>"
      }
    });

    const data = await res.json();
    return data.verified === true;
  } catch (err) {
    console.error("Verify request failed:", err);
    return false;
  }
}

// export default function handler(req, res) {
//   const token = req.headers.authorization?.split(" ")[1];
//   if (token === process.env.ACCESS_TOKEN) {
//     res.status(200).json({ loggedIn: true });
//   } else {
//     res.status(200).json({ loggedIn: false });
//   }
// }
export default function handler(req, res) {
  const token = req.headers.authorization?.split(" ")[1];
  const validToken = "om123access4567"; // Replace with your real secret or use process.env.ACCESS_TOKEN in production

  if (token === validToken) {
    return res.status(200).json({ verified: true });
  } else {
    return res.status(401).json({ verified: false, error: "Invalid token" });
  }
}

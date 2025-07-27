// export default function handler(req, res) {
//   const token = req.headers.authorization?.split(" ")[1];
//   if (token === process.env.ACCESS_TOKEN) {
//     res.status(200).json({ loggedIn: true });
//   } else {
//     res.status(200).json({ loggedIn: false });
//   }
// }
export default function handler(req, res) {
  const validToken = "om123access4567"; // ✅ PLACE HERE

  const authHeader = req.headers.authorization || "";
  const token = authHeader.split(" ")[1]; // "Bearer om123access4567" => "om123access4567"

  if (token === validToken) {
    res.status(200).json({ verified: true });
  } else {
    res.status(401).json({ verified: false });
  }
}


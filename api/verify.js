export default function handler(req, res) {
  const loggedIn = req.cookies?.loggedIn === "true";
  res.status(200).json({ loggedIn });
}

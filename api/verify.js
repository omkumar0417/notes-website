export default function handler(req, res) {
  const token = req.headers.authorization?.split(" ")[1];
  if (token === process.env.ACCESS_TOKEN) {
    res.status(200).json({ loggedIn: true });
  } else {
    res.status(200).json({ loggedIn: false });
  }
}

export default async function handler(req, res) {
  const text = req.body;
  res.status(200).json({ message: "Hello from Vercel Serverless Function!" });
}


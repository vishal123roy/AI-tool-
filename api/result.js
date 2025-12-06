export default async function handler(req, res) {
  const  payload  = req.body;
  console.log(typeof payload);
  res.status(200).json({ message: "Hello from Vercel Serverless Function!" });
}


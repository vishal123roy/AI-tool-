export default async function handler(req, res) {
  const  payload = req.body;
  const URL = process.env.API_URL;
  const result = await fetch(URL,{
    method:"POST",
    body:payload
  })
  res.status(200).json(result);
}


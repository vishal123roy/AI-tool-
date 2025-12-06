export default async function handler(req, res) {
  if(req.method !== "POST"){
    return res.status(405).json({error:"only post allowed"});
  }
  const payloadData = req.body;
  console.log(payloadData);
  if(!payloadData){
    return res.status(400).json({message:"data is not sent"});
  }
  const URL = process.env.API_URL;
  const payload = {
    contents: [
      {
        parts: [{ text: payloadData }],
      },
    ]
  };
  const result = await fetch(URL,{
    method: "POST",
    body: JSON.stringify(payload),
  });
  console.log(result);
  res.status(200).json(result);
}

export default async function handler(req, res) {
  const githubUrl = "https://raw.githubusercontent.com/Cmmdx256/Glockhub/refs/heads/main/glockbabapiro.lua";
  
  try {
    const response = await fetch(githubUrl);
    if (!response.ok) {
      throw new Error("GitHub'dan kod alınamadı.");
    }
    const scriptContent = await response.text();
    
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    return res.status(200).send(scriptContent);
  } catch (error) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    return res.status(500).send("Error loading script");
  }
}

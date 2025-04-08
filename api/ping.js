export default async function handler(req, res) {
    const renderUrl = "https://tu-api-render.onrender.com/ping"; // Cambiá esto
  
    try {
      const pingRes = await fetch(renderUrl);
      const text = await pingRes.text();
      console.log(`[${new Date().toISOString()}] Ping OK`);
      res.status(200).send(`Ping enviado: ${text}`);
    } catch (error) {
      console.error(`[${new Date().toISOString()}] Error al hacer ping`, error);
      res.status(500).send("Error al hacer ping a Render");
    }
  }
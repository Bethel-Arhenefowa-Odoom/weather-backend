const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/log", (req, res) => {
  const { city, temp } = req.body;
  console.log(`🔔 Weather search logged: ${city} – ${temp}°C`);
  res.send({ message: "Logged successfully ✅" });
});

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});

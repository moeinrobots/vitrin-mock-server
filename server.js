const express = require("express");
const config = require("./config.json");

const app = express();
const port = process.env.PORT || 3000;

app.get("/config", (_request, response) => {
  response.json(config);
});

app.use((_request, response) => {
  response.status(404).json({ error: "Not Found" });
});

app.listen(port, () => {
  console.log(`Vitrin mock server is running at http://localhost:${port}`);
});

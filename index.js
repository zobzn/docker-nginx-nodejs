const express = require("express");
const app = express();
const port = 3000;

const containerId = process.env.HOSTNAME;

app.get("/", (req, res) => {
  res.send(`Hello World from <code>${containerId}</code>!`);
});

app.listen(port, () => {
  console.log(`Example app ${containerId} listening on port ${port}!`);
});

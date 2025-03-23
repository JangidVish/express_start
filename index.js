const express = require("express");

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  return res.json({ message: "Hi, This is home page" });
});

app.listen(PORT, () => {
  console.log("Server is listening at: ", PORT);
});

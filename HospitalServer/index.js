const express = require("express");
const app = express();
const port = 3000;

app.get("/health-checkup", (req, res) => {
  // Get the current date and time
  const now = new Date();
  const date = now.getDate();
  const month = now.getMonth() + 1; // Months are zero-based
  const year = now.getFullYear();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  
  const currentDateTime = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;

  // Read headers
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.headers.kidneyid; // Use consistent casing

  // Debugging: log received headers and current date and time
  console.log(`Received headers - username: ${username}, password: ${password}, kidneyId: ${kidneyId} at ${currentDateTime}`);

  // Check credentials and kidneyId
  if (username === "ayush" && password === "passwd") {
    if (kidneyId === '1' || kidneyId === '2') {
      res.json({ msg: "You are healthy" });
    } else {
      res.status(400).json({ msg: "Chaa mud Gyi" });
    }
  } else {
    res.status(401).json({ msg: "Unauthorized" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}, Visit http://localhost:${port} for the Output`);
});

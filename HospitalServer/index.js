const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.get("/health-checkup", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.headers.kidneyid;

  // Construct log message
  const logMessage = `Received headers - username: ${username}, password: ${password}, kidneyId: ${kidneyId}\n`;

  // Logging received headers to console
  console.log(logMessage);

  // Append log message to entries.txt file
  fs.appendFile("entries.txt", logMessage, (err) => {
    if (err) {
      console.error("Error writing to file", err);
    }
  });

  if (username === "ayush" && password === "passwd") {
    if (kidneyId === '1' || kidneyId === '2') {
      res.json({
        msg: "You are healthy",
      });
    } else {
      res.status(400).json({
        msg: "Chaa mud Gyi",
      });
    }
  } else {
    res.status(401).json({
      msg: "Unauthorized",
    });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}, Visit http://localhost:${port} for the Output`);
});

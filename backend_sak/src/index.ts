console.log("wadap boyz");

import express, { Express, Request, Response} from "express";

const PORT = 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from SAKKE!" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

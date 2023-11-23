console.log("wadap boyz");

import express, { Express, Request, Response} from "express";
import sqlite3 from "sqlite3";
import cors from "cors";
import bodyParser from "body-parser";

const PORT = 3001;

const app = express();

app.use(bodyParser.json());

const henkilosto = new sqlite3.Database('henkilosto.db');

henkilosto.serialize(() => {
  henkilosto.run('CREATE TABLE IF NOT EXISTS Henkilosto (id INTEGER PRIMARY KEY AUTOINCREMENT, Etunimi TEXT, Sukunimi TEXT, Salasana TEXT,Puhelin INTEGER, Sahkoposti TEXT, Tyotehtava TEXT, Palkka FLOAT)');
});

const kayttajat = new sqlite3.Database('kayttajat.db');

kayttajat.serialize(() => {
  kayttajat.run('CREATE TABLE IF NOT EXISTS Kayttajat (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT NOT NULL, password TEXT NOT NULL)');
});

app.use(cors());

app.get("/api", (req, res) => {
    res.json({ message: "Hello from SAKKE!" });
  });

  app.get('/api/data', (req, res) => {
    henkilosto.all('SELECT * FROM Henkilosto', (err, rows) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      res.json(rows);
    });
  });

  app.post('/api/data', async (req, res) => {
    const { Etunimi, Sukunimi, Sahkoposti, Puhelin, Tyotehtava, Palkka } = req.body;
  
    henkilosto.run('INSERT INTO Henkilosto (Etunimi, Sukunimi, Sahkoposti, Puhelin, Tyotehtava, Palkka) VALUES (?, ?, ?, ?, ?, ?)', 
    [Etunimi, Sukunimi, Sahkoposti, Puhelin, Tyotehtava, Palkka], (err) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      res.json({ success:true, message: 'Employee added' });
    });
  });

  /*
  //tästä PITÄÄLLINEN ottaa mallia
app.post("/login", async (req, res) => {
  console.log("login request:");
  try{
    console.log(req.body);
    var responsedata="login: "+req.body.name+","+req.body.pw;
    return res.status(200).json(responsedata);
  }catch(error:any){
    console.log("error");
    return res.status(418).json({error:"something did not work"});
  }
});
*/
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});



//Tomin testaus kirjautumis databasen ja kirjautumisen tekemiseen

const PORT2 = 3002;
const kirjautuminen = new sqlite3.Database("kirjautuminen.db");

kirjautuminen.serialize(() => {
  kirjautuminen.run(
    'CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)'
  );
});

app.use(cors());
app.use(express.json()); // Add this line to parse JSON requests

app.post("/api/register", async (req: Request, res: Response) => {
  try {
    interface RegistrationData {
      username: string;
      password: string;
    }

    console.log("Received request:", req.body);
    const { username, password }: RegistrationData = req.body;

    console.log("Received data:", { username, password });

    await kirjautuminen.run(
      "INSERT INTO Users (username, password) VALUES (?, ?)",
      [username, password]
    );

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//tomin login testi
interface LoginData {
  id: number;
  username: string;
  password: string;
}

app.post("/api/login", async (req: Request, res: Response) => {
  console.log("login request:");

  try {
    const { username, password } = req.body;

    kirjautuminen.all("SELECT * FROM Users WHERE username = ? AND password = ?", [username, password], (err, rows: LoginData[]) => {
      if (!err && rows.length > 0) {
        const loggedInUser = rows[0].username;
        console.log("User logged in:", loggedInUser);
        return res.status(200).json({ message: "Login successful", username: loggedInUser });
      } else {
        return res.status(401).json({ error: "Invalid username or password" });
      }
    });
  } catch (error) {
    console.log("error");
    return res.status(418).json({ error: "something did not work" });
  }
});

app.get("/api/getuserdata", async (req: Request, res: Response) => {
  kirjautuminen.all("SELECT * FROM Users", (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(rows);
  });
});

app.listen(PORT2, () => {
  console.log(`Create account server is running on http://localhost:${PORT2} :O`);
});

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

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const app = express();

const henkilosto = new sqlite3.Database('henkilosto.db');

henkilosto.serialize(() => {
  henkilosto.run('CREATE TABLE IF NOT EXISTS Henkilosto (id INTEGER PRIMARY KEY AUTOINCREMENT, Etunimi TEXT, Sukunimi TEXT, Salasana TEXT,Puhelin INTEGER, Sahkoposti TEXT, Tyotehtava TEXT, Palkka FLOAT)');
});

app.use(cors());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.get('/api/data', (req, res) => {
  henkilosto.all('SELECT * FROM Henkilosto', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(rows);
  });
});

app.post('/api/data', (req, res) => {
  const { Etunimi, Sukunimi, Sahkoposti, Puhelin, Tyotehtava, Palkka } = req.body;

  henkilosto.run('INSERT INTO Henkilosto (Etunimi) VALUES (?)', [Etunimi], (err) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json({ Etunimi: 'Data added to the database' });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
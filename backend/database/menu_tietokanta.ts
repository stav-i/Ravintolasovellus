import path from "path";
import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

export default class Menu {
    public tietokanta?: Database;

    constructor() {
        this.yhdista();
    }

    private yhdista = async () => {
        this.tietokanta = await open({
            filename: path.resolve(__dirname, "menu.db"),
            driver: sqlite3.Database
        })

        await this.tietokanta.run(`
            CREATE TABLE IF NOT EXISTS menu (
                id TEXT PRIMARY KEY NOT NULL,
                nimi TEXT NOT NULL,
                info TEXT NOT NULL,
                hinta REAL NOT NULL,
                kategoria TEXT NOT NULL
            )
        `)
        
    }
}
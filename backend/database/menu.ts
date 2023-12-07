import { uuid } from 'uuidv4';
import Menu from './menu_tietokanta';

const db = new Menu();

export const haeMenu = async () => {
    const menu = await db.tietokanta?.all('SELECT * FROM menu');
    return menu;
}

export const luoUusi = async (nimi: string, info: string, hinta: number, kategoria: string) => {
    const lause = await db.tietokanta?.prepare(`
            INSERT INTO menu (id, nimi, info, hinta, kategoria)
            VALUES (?, ?, ?, ?, ?)
        `)
    let id = uuid();

    await lause?.run(id, nimi, info, hinta, kategoria);

    const luotu = await etsiRuoka(id)
    return luotu;
}

export const poista = async (id: string) => {
    await etsiRuoka(id);
    const lause = await db.tietokanta?.prepare(`
            DELETE FROM menu 
            WHERE id = ?
        `)

    await lause?.run(id);
}

export const muokkaa = async (id: string, nimi: string, info: string, hinta: number, kategoria: string) => {
    const loydetty = etsiRuoka(id);

    const lause = await db.tietokanta?.prepare(`
            UPDATE menu
            SET nimi = ?, info = ?, hinta = ?, kategoria = ?
            WHERE id = ?
        `)

    await lause?.run(nimi, info, hinta, kategoria, id);
}

export const etsiRuoka = async (id: string) => {
    const loydetty = await db.tietokanta?.get(`SELECT * FROM menu WHERE id = ?`, id);

    if (!loydetty) {
        throw {
            statusKoodi: 400,
            virheViesti: `Not found`
        }
    }
    return loydetty;
}
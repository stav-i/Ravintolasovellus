import express, { Router, Request, Response } from "express";
import { etsiRuoka, haeMenu, luoUusi, muokkaa, poista } from "../database/menu";

export const reititin: Router = express.Router();

reititin.get("/", async (request: Request, response: Response) => {
    try {
        const media = await haeMenu();

        return response.status(200).json(media);
    } catch (error: any) {
        return response.json(error);
    }
});

reititin.get("/:id", async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const result = await etsiRuoka(id);

        return response.status(200).json(result);
    } catch (error: any) {
        return response.json(error);
    }
});

reititin.post("/", async (request: Request, response: Response) => {
    try {
        const { nimi, info, hinta, kategoria } = request.body;

        if(!nimi || !info || !hinta || !kategoria) {
            throw {
                statusKoodi: 400,
                virheViesti: "Stuff is missing"
            }
        }

        const luotu = await luoUusi(nimi, info, hinta, kategoria);

        return response.status(201).json(luotu);

    } catch (error: any) {
        return response.status(error.statusKoodi).json(error);
    }
});

reititin.put("/:id", async (request: Request, response: Response) => {
    try {

        const { id } = request.params;
        const { nimi, info, hinta, kategoria } = request.body;

        if(!nimi || !info || !hinta || !kategoria === undefined) {
            throw {
                statusKoodi: 400,
                virheViesti: "Virheellinen sisältö"
            }
        }
        const muokattu = await muokkaa(id, nimi, info, hinta, kategoria);

        return response.status(200).json(muokattu);

    } catch (error: any) {
        return response.status(error.statusKoodi).json(error);
    }
});

reititin.delete("/:id", async (request: Request, response: Response) => {
    try {
        const { id } = request.params;

        await poista(id);

        return response.status(204).json();

    } catch (error: any) {
        return response.json(error);
    }
});
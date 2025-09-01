import { Router } from "express";
import axios from "axios";
import PokemonController from "../Controller/PokemonController.js"; 

const router = Router();

router.get("/pokemon/:name", async (req, res) => {
    await PokemonController.GetPokemon(req, res);
});
router.get("/GetCityPokemon/:name", async (req, res) => {
    await PokemonController.GetCityPokemon(req, res);
});

export default router; 
import { Request, Response } from "express";
import { Anime } from "../models/index";
import { sequelize } from "../database";

export async function CreatedAnime(req: Request, res: Response) {
  try {
    const { name, ano, id } = req.body;
    const newAnime = await Anime.create({
      id,
      ano,
      name,
    });
    return res.json(newAnime).status(200);
  } catch (error) {
    return res.json(error).status(500);
  }
}

export async function StoryAnime(req: Request, res: Response) {
  try {
    const animes = await Anime.findAll({
      order: [[sequelize.literal("name"), "ASC"]],
    });
    return res.json(animes).status(200);
  } catch (error) {
    return res.json(error).status(500);
  }
}

export async function StoryOneAnime(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const animes = await Anime.findAll({
      where: {
        id,
      },
    });
    return res.json(animes).status(200);
  } catch (error) {
    return res.json(error).status(500);
  }
}

export async function UpdatedAnime(req: Request, res: Response) {
  const { id } = req.params;
  const { name, ano } = req.body;
  try {
    const animeUpdate = await Anime.update(
      {
        name,
        ano,
      },
      { where: { id } }
    );
    return res.json(animeUpdate).status(200);
  } catch (error) {
    return res.json(error).status(500);
  }
}

export async function DeleteAnime(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const anime = await Anime.destroy({
      where: {
        id,
      },
    });
    return res.json(anime).status(200);
  } catch (error) {
    return res.json(error).status(500);
  }
}

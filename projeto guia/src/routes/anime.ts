import { Router } from "express";
import {
  CreatedAnime,
  DeleteAnime,
  StoryAnime,
  StoryOneAnime,
  UpdatedAnime,
} from "../controllers/AnimeConstroller";

export const RouterAnime = Router();

RouterAnime.get("/", StoryAnime);
RouterAnime.get("/:id", StoryOneAnime);
RouterAnime.post("/", CreatedAnime);
RouterAnime.delete("/:id", DeleteAnime);
RouterAnime.put("/:id", UpdatedAnime);

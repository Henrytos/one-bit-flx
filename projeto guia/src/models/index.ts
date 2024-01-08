import { Anime } from "./Anime";
import { User } from "./user";

User.hasMany(Anime, { foreignKey: "animeId" });

export { User, Anime };

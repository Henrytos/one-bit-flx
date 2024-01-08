import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";

export interface Anime {
  id: number;
  name: string;
  ano: number;
}

export interface AnimeCreationAttributes extends Optional<Anime, "id"> {}

export interface AnimeInstance
  extends Model<Anime, AnimeCreationAttributes>,
    Anime {}

export const Anime = sequelize.define<AnimeInstance, Anime>("animes", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  ano: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
});

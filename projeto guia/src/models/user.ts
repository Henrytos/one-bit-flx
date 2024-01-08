import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";

export interface User {
  id: number;
  name: string;
  anime_id: number;
}

export interface UserCreationAttributes extends Optional<User, "id"> {}

export interface UserInstance
  extends Model<User, UserCreationAttributes>,
    User {}

export const User = sequelize.define<UserInstance, User>("Users", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  anime_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "animes",
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
});

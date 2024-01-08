import express from "express";
import { sequelize } from "./database";
import { RouterAnime } from "./routes/anime";

const app = express();
const PORT = 3333 || process.env.PORT;

app.use(express.json());
app.use("/all-animes", RouterAnime);

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log("Connection has been established successfully.");
  });
  console.log(`Server running on port ${PORT}`);
});

import express from "express";
import { sequelize } from "./database";
import { adminJs, adminJsRouter } from "./adminjs";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(adminJs.options.rootPath, adminJsRouter);

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log("Connection has been established successfully.");
  });

  console.log(`Server started successfuly at port ${PORT}`);
});

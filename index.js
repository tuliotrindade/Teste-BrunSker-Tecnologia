const express = require("express");
const bodyParser = require("body-parser");
const immobileRouter = require("./src/routes/immobileRoutes");
const usersRouter = require("./src/routes/usersRoutes");
const errorMiddleware = require("./src/middlewares/errorMiddleware");

const app = express();
app.use(bodyParser.json());

const db = require("./src/db");
db.sync();

const PORT = 3335;

app.use("/users", usersRouter);

app.use("/immobile", immobileRouter);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});

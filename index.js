const express = require('express');
const bodyParser = require('body-parser');
const immobileRouter = require('./src/routes/immobileRoutes');
const usersRouter = require('./src/routes/usersRoutes')

const app = express();
app.use(bodyParser.json());

const db = require("./src/db");
db.sync();

const PORT = 3334;

app.use('/users', usersRouter)

app.use('/immobile', immobileRouter);

app.listen(PORT , () => {
  console.log(`Aplicação ouvindo na porta ${ PORT }`);
});
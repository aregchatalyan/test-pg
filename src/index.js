const express = require('express');
const morgan = require('morgan');
const { exec } = require('child_process');
const { env } = require('./config/env.js');
const { db } = require('./db.js');
const { routes } = require('./api/api.routes.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

routes(app);

(async () => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');

    exec('npx sequelize db:migrate');
    exec('npx sequelize db:seed:all');

    app.listen(env.PORT, () => {
      console.log(`Server started on port: ${ env.PORT }`);
    });
  } catch (e) {
    console.error('Unable to connect to the database:', e);
  }
})();

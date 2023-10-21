const { Sequelize, Transaction } = require('sequelize');
const { env } = require('./config/env.js');

exports.db = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASS,
  {
    host:           'localhost',
    dialect:        'postgres',
    logging:        false,
    isolationLevel: Transaction.ISOLATION_LEVELS.READ_COMMITTED,
    pool:           {
      max:     1,
      min:     0,
      acquire: 30000,
      idle:    10000
    }
  }
);

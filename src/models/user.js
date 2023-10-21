const { DataTypes } = require('sequelize');
const { db } = require('../db.js');

exports.User = db.define('user', {
  balance: {
    type:      DataTypes.INTEGER,
    allowNull: false
  }
});

(async () => {
  await db.sync({ force: true });
})();

const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, // This is where the password is used
    {
      host: process.env.DB_HOST,
      dialect: 'mysql',
      port: process.env.DB_PORT
    }
  );
}

module.exports = sequelize;
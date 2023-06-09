const { Pool } = require("pg");
require('dotenv').config()

const pool = new Pool({
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD.toString(),
  database: process.env.PG_DATABASE,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT
});

module.exports = pool
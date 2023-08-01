const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'recursosDB',
  password: 'Vale2902',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};

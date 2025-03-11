
const { Pool } = require("pg");

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    post: process.env.BD_POST,
    like: process.env.BD_LIKE,
    port: process.env.DB_PORT
});

module.exports = pool;

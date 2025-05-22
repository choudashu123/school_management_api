const mysql = require('mysql2');
const path = require('path');
const fs = require('fs')
require('dotenv').config();

const caCertBase64 = process.env.DB_CA_CERT_BASE64;
const caCertBuffer = Buffer.from(caCertBase64, 'base64');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,

    ssl: {
        ca: caCertBuffer
    }
});

module.exports = pool.promise();
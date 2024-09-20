const { Sequelize } = require('sequelize');
require('dotenv').config();  // Make sure dotenv is set up for local development

// Define the PostgreSQL connection using DATABASE_URL
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false,  // Set to true if you want to see SQL queries
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = sequelize;

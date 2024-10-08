const { Sequelize } = require('sequelize');
require('dotenv').config();  // Make sure dotenv is set up for local development


const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:Devan@localhost:5432/task_scheduler', {
    dialect: 'postgres',
    logging: true,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = sequelize;


module.exports = sequelize;

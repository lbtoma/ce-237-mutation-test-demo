// Update with your config settings.
require('dotenv/config');

module.exports = {
  development: {
    client: process.env.CLIENT,
    connection: {
      host: process.env.HOST,
      port: process.env.HOST_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    migrations: {
      directory: './src/database/migrations'
    }
  }
};

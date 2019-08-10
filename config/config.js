module.exports = {
  "development": {
   "use_env_variable": "db_url",
    "dialect": "mysql"
  },
  "test": {
    "use_env_variable": "db_url",
    "logging": false
  },
  "production": {
    "host": process.env.Host,
    "username": process.env.Username,
    "database": process.env.Databse,
    "password": process.env.Password,
    "port": process.env.Port,
    "dialect": "mysql",

  }
}
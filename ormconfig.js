module.exports = {
   "type": "mysql",
   "host": process.env.MYSQLHOST,
   "port": process.env.MYSLQLPORT,
   "username": process.env.MYSQLUSER,
   "password": process.env.MYSQLPASS,
   "database": process.env.MYSQLDBNAME,
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}
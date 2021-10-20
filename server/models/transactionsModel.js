const { Pool } = require('pg');
// install pg dependency?

//need to set up postgreSQL db
const PG_URI = 'postgres://fefrvybx:D0xjzhQ5Jt7EQ4LoGRvqEVB3e5UH9D8x@fanny.db.elephantsql.com/fefrvybx';

const pool = new Pool ({
    connectionString: PG_URI
});

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    }
}


// psql -d <url from elephantSQL> -f starwars_postgres_create.sql
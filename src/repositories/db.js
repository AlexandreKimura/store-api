import pg from "pg";

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }
  const pool = new pg.Pool({
    connectionString:
      "postgres://ygmyaoej:7u5P9kLlwrxrVl3r-Q9EtjGAXK33eUyZ@chunee.db.elephantsql.com/ygmyaoej",
  });
  global.connection = pool;
  return pool.connect();
}

export { connect };

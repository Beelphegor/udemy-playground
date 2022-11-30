// import { Pool } from "pg";
import pkg from "pg";
const { Pool } = pkg;

import humps from "humps";

const pool = new Pool({
  host: "localhost",
  database: "hackerbook",
});

async function query(sql, params) {
  const client = await pool.connect();
  try {
    const result = await client.query(sql, params);
    const rows = humps.camelizeKeys(result.rows);
    return { ...result, rows };
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
}

export default query;

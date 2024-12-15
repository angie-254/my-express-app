
const { pool } = require('./connection/connection');
async function getIncomingMail() {
    const [rows, fields] = await pool.query('SELECT * FROM aida_llm.insurance_data');
    return rows;

}

module.exports = { getIncomingMail };
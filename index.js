const express = require('express');
const app = express();
const port = 3000;
 const mailController  = require('./controllers/mail-controller');
// const  {pool } = require('./connection/connection');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/incomingMails', async (req, res) => {
    const mails = await mailController.getIncomingMail();
    res.send(mails).status(400);
    // const [rows, fields] = await pool.query('SELECT * FROM aida_llm.insurance_data');
    // res.send(rows);
});

app.post('/test', (req, res) => {
    res.send(' Post Test!');
});


app.get('/test/:mailType', (req, res) => {
    console.log({req});
    res.send('Test Hello World!');
});


app.listen(port, () => {
    console.log('Example app listening on port 3000!');
});
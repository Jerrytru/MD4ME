const express = require('express');
const axios = require('axios');
const { keys }  = require('./config.js');
const { appID } = require('./config.js')
const app = express();



axios.defaults.headers.common['Authorization'] = apiKey;

const app = express();

const PORT = process.env.PORT || 5000;


app.use(express.static(__dirname + '/client/build'))


app.get('/home', async (req, res) => {
  let {data} = await axios.get(`f77a49fbfe7187f5930ace5f21af9020=${keys}`);
  res.json(data);
})

app.get('/home2', async (req, res) => {
  let {data} = await axios.get(`f77a49fbfe7187f5930ace5f21af9020=${keys}`);
  res.json(data);
})
app.get('/home3', async (req, res) => {
  let {data} = await axios.get(`f77a49fbfe7187f5930ace5f21af9020=${keys}`);
  res.json(data);
})
app.get('/home4', async (req, res) => {
  let {data} = await axios.get(`f77a49fbfe7187f5930ace5f21af9020=${keys}`);
  res.json(data);
})

app.get('/', (req, res) => {
  res.sendFile( path.join(__dirname, './client/build/index.html') );
})

app.listen(PORT, () => console.log(`App listening on Port ${PORT}`));


// f77a49fbfe7187f5930ace5f21af9020

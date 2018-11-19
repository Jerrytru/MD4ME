const express = require('express');
const axios = require('axios');
const apiKey = 'Bearer f77a49fbfe7187f5930ace5f21af9020' ;
const path = require('path');



axios.defaults.headers.common['Authorization'] = apiKey;

const app = express();

const PORT = process.env.PORT || 5000;


app.use(express.static(__dirname + '/client/build'))


app.get('/doctorSearch', async (req, res) => {
  let {data} = await axios.get(`https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=f77a49fbfe7187f5930ace5f21af9020=${req.query.doctorSearch}`);
  res.json(data);
})

app.get('/specialtySearch', async (req, res) => {
  let {data} = await axios.get(`https://api.betterdoctor.com/2016-03-01/specialties?user_key=f77a49fbfe7187f5930ace5f21af9020=${req.query.specialtySearch}`);
  res.json(data);
})
app.get('/insuranceSearch', async (req, res) => {
  let {data} = await axios.get(`https://api.betterdoctor.com/2016-03-01/insurances?user_key=f77a49fbfe7187f5930ace5f21af9020=${req.query.insuranceSearch}`);
  res.json(data);
})
app.get('/conditionsSearch', async (req, res) => {
  let {data} = await axios.get(`https://api.betterdoctor.com/2016-03-01/conditions?user_key=f77a49fbfe7187f5930ace5f21af9020=${req.query.conditionsSearch}`);
  res.json(data);
})

app.get('/', (req, res) => {
  res.sendFile( path.join(__dirname, './client/build/index.html') );
})

app.listen(PORT, () => console.log(`App listening on Port ${PORT}`))

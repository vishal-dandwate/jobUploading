const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());
const {
  JobController
} = require('./controllers/index.controller');

app.get('/job', JobController.fetch);
app.post('/job', JobController.create);
app.put('/job/:id', JobController.update);
app.delete('/job/:id',JobController.del);

app.listen(8080, () => console.log('server port on 8080'));
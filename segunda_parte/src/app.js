const express = require('express');
const {getDepartments} = require('./controller/controllers');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/departments', getDepartments);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

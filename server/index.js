const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(routes);

app.listen(4000, () => {
    console.log('Listening on: localhost:4000');
});

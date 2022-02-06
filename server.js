'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World, Hope you are doing well. hope you are well. my cicd pipeline is not working vdfgergrethretethdsgtjfdgerjtrhsrhryhdrt!!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World, Hope you are doing well. hope you are well. my cicd pipeline is not working 
Step 1 is to Generate and store Git credentials, click on the link and it will display a command, copy that and run it in your local terminal/command prompt. Now we can access our Cloud Source Repository.

Follow the next steps, Create a folder in your local system, open the terminal/command prompt,  run the git clone command to clone the repository. Now copy the application code files to the clone folder and then run commit and push commands to update the Google Cloud Source Repository. !!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

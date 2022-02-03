// require modules
const express = require('express');
const { exec } = require("child_process");

const app = express();
const port = 3000;
const host = 'localhost';

app.get('/', (req, res) => {
    exec("open .", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
})

//start the app server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
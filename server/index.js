const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(cors)
app.use("/",require(path.join(__dirname, 'sendMail')))

app.listen(PORT, () => {
console.log("Server running on port " + PORT)  
})
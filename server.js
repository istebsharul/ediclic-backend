const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

const sendMail = require("./controller/sendemail.js");

app.get('/', (req, res) => {
    res.send("I am Home page of the server");
});

app.post('/sendemail', sendMail);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

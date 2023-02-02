const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const port = process.env.PORT || 5000;

const app = express();

// data alma 
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//static html staff
app.use(express.static(path.join(__dirname, 'public')));


app.use(`/openai`, require(`./routes/openaiRoutes`))
app.listen(port, () => console.log(`server started on port ${port}`));

'use strict';

const { urlencoded } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

const empRoute = require('./routes/emp');
const absensiRoute = require('./routes/absensi');

const PORT = process.env.PORT || 3000;

// ----------------- middleware -----------------------------
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
// ----------------- /middleware -----------------------------

// ----------------- ROUTES -----------------------------
app.use('/api/emp', empRoute);
app.use('/api/absensi', absensiRoute);
// ----------------- /ROUTES -----------------------------

// ----------------- connect to mongodb atlas --------------------
mongoose.connect(process.env.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => {
        console.log('database is connected!\n ...')
    })
    .catch(err => {
        console.log(err)
    });
// ----------------- /connect to mongodb atlas --------------------

// ----------------- ROUTING -----------------------------
app.get('/', (req, res) => {
    res.sendStatus(200);
});
// ----------------- /ROUTING -----------------------------

// listen
app.listen(PORT, () => {
    console.log(`Server is running at: http://127.0.0.1:${PORT}`);
});
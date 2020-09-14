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

// ----------------- connect to mongodb atlas --------------------
mongoose.connect(process.env.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => {
        console.log('the app is connected to db\n ...')
    })
    .catch(err => {
        console.log(err)
    });
// ----------------- /connect to mongodb atlas --------------------

// ----------------- ROUTES -----------------------------
app.use('/api/emp', empRoute);
app.use('/api/absensi', absensiRoute);
// ----------------- /ROUTES -----------------------------

// listen
app.listen(PORT, () => {
    console.log(`Server is running at: http://127.0.0.1:${PORT}`);
});
'use strict';

const express = require('express');
const router = express.Router();

// call model
const Absensi = require('../models/model.absensi');

// @routes POST api/absen
// desc: Create a post
router.post('/', async (req, res) => {
    let newAbsen = new Absensi(req.body);
    try {
        let postNewAbs = await newAbsen.save();
        if (!postNewAbs) throw Error('hmm.. something went wrong');
        res.status(200).json(postNewAbs);
    } catch (err) {
        res.status(417).json({ msg: err });
    }
});
module.exports = router;
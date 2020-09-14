'use strict';

const express = require('express');
const router = express.Router();
const moment = require('moment');
// call model
const { Absensi } = require('../models/model.absensi');

// @routes GET api/absensi
// desc: GET all employees's presence data
router.get('/', async (req, res, next) => {
    // testing moment
    let defaultHour = '0800'
    let hourIn = moment().format('HHmm');
    console.log(defaultHour + ' ' + hourIn);
    if (hourIn > defaultHour) {
        console.log('late')
    } else {
        console.log('ok' + defaultHour - hourIn)
    }
    console.log('\n');
    let now = moment(new Date);
    let end = moment("2020-09-16T05:00:09.542Z");
    let duration = moment.duration(end.diff(now));
    let hours = duration.asHours();
    console.log(moment(end).format('DD/MM/YYYY HH:mm:ss'));
    console.log(hours);
    // 
    try {
        let getAbsen = await Absensi.find();
        if (!getAbsen) throw Error('Items not found');
        res.status(200).json(getAbsen);
    } catch (err) {
        res.status(417).json({ msg: err });
    }
    next();
});

// @routes GET api/absensi/:id
// desc: GET employees data base on emp id
router.get('/:id', async (req, res, next) => {
    try {
        let getAbsenById = await Absensi.findById(req.params.id);
        if (!getAbsenById) throw Error('the item wasn\'t existed!');
        res.status(200).json(getAbsenById);
    } catch (err) {
        res.status(417).json({ msg: err });
    }
    next();
});


// @routes POST api/absensi
// desc: Create a post
router.post('/', async (req, res) => {
    // let newAbsen = new Absensi(req.body);
    // let latehour = moment().format('x');
    // let latehour = moment().format('x');
    let newAbsen = new Absensi({
        nik: req.body.empNIK,
    });
    try {
        let postNewAbs = await newAbsen.save();
        if (!postNewAbs) throw Error('hmm.. something went wrong');
        res.status(200).json(postNewAbs);
    } catch (err) {
        res.status(417).json({ msg: err });
    }
});

module.exports = router;
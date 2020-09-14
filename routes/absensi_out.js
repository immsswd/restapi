'use strict';

const express = require('express');
const router = express.Router();
const moment = require('moment');
// call model
const { Absensi } = require('../models/model.absensi');

// @routes GET api/out/
// desc: GET all employees data
router.get('/', async (req, res, next) => {
    try {
        let emp = await Absensi.find();
        if (!emp) throw Error('Items are not found');
        res.status(200).json(emp);
    } catch (err) {
        res.status(417).json({ msg: err });
    }
    next();
});

// @routes GET api/out/:id
// desc: GET particular data
router.get('/:id', async (req, res, next) => {
    // console.log(moment().format());
    try {
        let emp = await Absensi.findById(req.params.id);
        if (!emp) throw Error('the item is not found');
        res.status(200).json(emp);
    } catch (err) {
        res.status(417).json({ msg: err });
    }
    next();
});

// @routes PATCH api/out/:id
// desc: PATCH update employees data
router.patch('/:id', async (req, res) => {
    try {
        // let updateEmp = await Emp.findByIdAndUpdate(req.params.id, req.body);
        let dateNow = moment().format();
        let updateEmp = await Absensi.findByIdAndUpdate(
            { _id: req.params.id, },
            { date_out: dateNow },
            { upset: true }
        );
        if (!updateEmp) throw Error('Something is wrong');
        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});

module.exports = router;
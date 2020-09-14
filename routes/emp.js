'use strict';
const express = require('express');
// const { model } = require('../models/model.emp');
const router = express.Router();

const { Emp } = require('../models/model.emp');

// @routes GET api/emp
// desc: GET all employees data
router.get('/', async (req, res, next) => {
    try {
        let emp = await Emp.find();
        if (!emp) throw Error('Items not found');
        res.status(200).json(emp);
    } catch (err) {
        res.status(400).json({ msg: err });
    }
    next();
});

// @routes GET api/emp/:id
// desc: GET all employees data
router.get('/:id', async (req, res, next) => {
    try {
        let emp = await Emp.findById(req.params.id);
        if (!emp) throw Error('the item is not found');
        res.status(200).json(emp);
    } catch (err) {
        res.status(417).json({ msg: err });
    }
    next();
});

// @routes POST api/emp
// desc: Create a post
router.post('/', async (req, res) => {
    // let newEmp = new Emp(req.body);
    let newEmp = new Emp({
        fullname: req.body.fullName,
        nik: req.body.empNIK,
        email: req.body.mail
    });
    try {
        let postNewEmp = await newEmp.save();
        if (!postNewEmp) throw Error('hmm.. something went wrong, when adding new emp data');
        res.status(200).json(postNewEmp);
    } catch (err) {
        res.status(417).json({ msg: err });
    }
});

// @routes for DELETE /api/emp/:id
// desc: delete a post
router.delete('/:id', async (req, res, next) => {
    try {
        let delEmp = await Emp.findByIdAndDelete(req.params.id);
        if (!delEmp) throw Error('nothing data was deleted');
        res.status(200).json({ success: true });
    } catch (err) {
        res.status(417).json({ msg: err })
    }
    next();
});

// @routes for UPDATE /api/post/:id
// desc: UPDATE or PATCH a post
router.patch('/:id', async (req, res) => {
    try {
        let updateEmp = await Emp.findByIdAndUpdate(req.params.id, req.body);
        if (!updateEmp) throw Error('Something is wrong');
        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});

module.exports = router; 
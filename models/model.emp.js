const mongoose = require('mongoose');

// BUAT SKEMA Karyawan/Pegawai
const empSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 70
    },
    nik: {
        type: Number,
        required: true,
        createIndexes: true,
        min: 5,
        max: 999999
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    date_updated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Employees', empSchema);
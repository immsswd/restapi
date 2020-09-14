const mongoose = require('mongoose');
// BUAT SKEMA Absensi Karyawan
const absensiSchema = new mongoose.Schema({

    nik: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    date_in: {
        type: Date,
        default: Date.now
    },
    date_out: {
        type: Date,
        default: ''
    },
    late: {
        type: String,
        default: ''
    }
});
exports.Absensi = mongoose.model('Absensi', absensiSchema);
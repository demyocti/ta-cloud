'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var kameraSchema = new Schema({
	merk : String,
	tipe : String,
	warna : String,
	jenis : String,
	});
	
module.exports = mongoose.model('kamera', kameraSchema);
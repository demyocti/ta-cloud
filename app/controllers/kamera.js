'use strict';

const router = require('express').Router();
const mongoose = require('mongoose');
var kamera = mongoose.model('kamera');

router.get('/', function (req, res) {
	kamera.find({}).exec(function(err, kamera) {
		res.render('kamera_index', { data : kamera });
	});
});
//Tambah data
router.get('/tambah', function (req, res) {
 res.render('kamera_tambah', { title : 'Tambah kamera', data: '' });
 });
 
 router.post('/tambah', function (req, res) {
	var merk = req.body.merk;
	var tipe = req.body.tipe;
	var warna = req.body.warna;
	var jenis = req.body.jenis;
	
	var kameraBaru = new kamera ({ merk : merk, tipe: tipe, warna : warna, jenis: jenis});
	kameraBaru.save(function(err){
	if (err) throw err;
	res.redirect('/kamera');
	});
	});
	
//ubah data
router.get('/ubah/:kamera_id([0-9a-z]+)', function (req, res) {
kamera.findOne({_id: req.params.kamera_id}).exec(function(err, kamera) {
if (err) throw err;
res.render('kamera_tambah', {title: 'Ubah kamera', data: kamera});
});
});

router.post('/ubah/:kamera_id([0-9a-z]+)', function (req,res) {
	var data_berubah = req.body;
	kamera.findOneAndUpdate({_id: req.params.kamera_id}, data_berubah).exec(function(err) {
		if (err)throw err;
	res.redirect('/kamera');
	});
});

//hapus data
router.get('/hapus/:kamera_id([0-9a-z]+)', function(req, res) {
	kamera.findOneAndRemove({_id: req.params.kamera_id}).exec(function(err){
	if (err) throw err;
	res.redirect('/kamera');
	});
	});
module.exports = router;

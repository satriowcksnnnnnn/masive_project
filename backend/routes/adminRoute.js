const express = require("express");
const router = express.Router();
const adminController = require('../controllers/adminController');
const uploadSeniman = require('../utils/uploadSeniman');
const uploadBerita = require('../utils/uploadBerita')

// SENIMAN
router.get("/daftar-seniman", adminController.getSeniman);
router.post('/upload-seniman', uploadSeniman.single('foto'), adminController.postSeniman);
router.get('/daftar-seniman/:id', adminController.getSenimanById);

//BERITA
router.get('/daftar-berita', adminController.getBerita);
router.get('/daftar-berita/:id', adminController.getBeritaById);
router.post('/upload-berita', uploadBerita.single('img'), adminController.postBerita);
router.put('/update-berita/:id', uploadBerita.single('img'), adminController.updateBeritaById);
router.delete('/delete-berita/:id', adminController.deleteBeritaById);

//AGENDA
router.get('/daftar-agenda', adminController.getAgenda);
router.get('/daftar-agenda/:id', adminController.getAgendaById);
router.post('/upload-agenda', adminController.postAgenda);
router.put('/update-agenda/:id', adminController.updateAgendaById);
router.delete('/delete-agenda/:id', adminController.deleteAgendaById);

// JENIS KARYA
router.get('/jenis-karya', adminController.getJenisKarya);
router.post('/upload-jenis-karya', adminController.postJenisKarya);
router.get('/jenis-karya/:id', adminController.getJenisKaryaById);

// KARYA
router.get('/koleksi', adminController.getAllKarya);
router.get('/koleksi/:1', adminController.getKaryaById);
router.post('/update-koleksi/:id', adminController.updateKaryaById);

router.get('/dashboard', adminController.getDashboardCounts);

module.exports = router;
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { checkSchema } = require("express-validator");
const createUserValidation = require("../validations/createUserValidation");
const uploadKarya = require('../utils/uploadKarya');
const authMiddleware = require("../middlewares/authMiddleware");

// METHOD GET MENDAPATKAN SEMUA DATA USER
router.get("/", userController.getAllUsers);

// METHOD POST MENAMBAHKAN DATA USER BARU
router.post("/", checkSchema(createUserValidation), userController.createNewUser);

// Menambahkan karya hanya bisa dilakukan oleh user yang sudah login
router.get("/koleksi", userController.getAllKarya);
router.get("/koleksi/:id", userController.getKaryaById);
router.post('/upload-karya', authMiddleware, uploadKarya.single('karya'), userController.postKarya);
router.post('/koleksi/:id/ulasan', authMiddleware, userController.postUlasan); // Authenticated users only

// METHOD GET dengan parameter id
router.get("/:id", userController.getUserById);

module.exports = router;
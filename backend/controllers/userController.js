const database = require('../model/database')
const { validationRequest } = require('express-validator')
const bcrypt = require('bcrypt')

const getAllUsers = async (req, res) => {
    try {
        const [results] = await database.query(`SELECT * FROM user`);
        if (Array.isArray(results) && results.length < 0) {
            res.json({
                users: [],
            });
        }
        res.json({
            users: results,
        })
    } catch (error) {
        console.log(error);

        res.statu(500).json({
            error: "Error getting users data",
        })
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.statu(400).json({
            error: "Silahkan isi field id user!"
        })
    }

    try {
        const [results] = await database.query(`SELECT * FROM user WHERE id = '${id}'`)
        if (Array.isArray(results) && results.length < 0) {
            res.json({
                users: [],
            })
        }
        res.json({
            users: results,
        })
    } catch (error) {
        console.log(error);

        res.status(500).json({
            error: "Error getting user data by ID",
        })
    }
}

const createNewUser = async (req, res) => {
    const { name, email, password } = req.body;

    const errors = validationRequest(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: "Bad request",
            errors: errors.array(),
        });
    } try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const [result] = await database.query(`INSERT INTO user (name, email, password) VALUES ('${name}', '${email}', '${password}')`)

        if (result.affectedRows > 0) {
            return res.json({
                message: "New User Created!"
            })
        }
        res.status(500).json({
            error: "No user created!"
        })
    } catch (error) {
        console.log(error);

        res.status(500).json({
            error: "Error while inserting new user",
        })
    }
}

const getAllKarya = async (req, res) => {
    const { status } = req.body;
    try {
        const [results] = await database.query(`SELECT * FROM karya WHERE status = 'Terverifikasi'`);
        if (Array.isArray(results) && results.length < 0) {
            res.json({
                karya: [],
            });
        }
        res.json({
            karya: results,
        })
    } catch (error) {
        console.log(error);

        res.statu(500).json({
            error: "Error getting karya data",
        })
    }
}

const getKaryaById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.statu(400).json({
            error: "Silahkan isi field id user!"
        })
    }

    try {
        const [results] = await database.query(`SELECT * FROM karya WHERE id = '${id}'`)
        if (Array.isArray(results) && results.length < 0) {
            res.json({
                karya: [],
            })
        }
        res.json({
            karya: results,
        })
    } catch (error) {
        console.log(error);

        res.status(500).json({
            error: "Error getting data karya by ID",
        })
    }
}

const postKarya = async (req, res) => {
    const { id_user, nama, email, id_jenis, alamat, judul_karya, deskripsi } = req.body;
    const karya = req.file ? req.file.filename : null;

    try {
        const userId = req.user.id;
        const userEmail = req.user.email;

        const [result] = await database.query(`INSERT INTO karya (id_user, nama, email, id_jenis, alamat, judul_karya, karya, deskripsi) VALUES ('${userId}', '${nama}', '${userEmail}', '${id_jenis}', '${alamat}', '${judul_karya}', '${karya}', '${deskripsi}')`);

        if (result.affectedRows > 0) {
            return res.json({
                message: "Data Karya berhasil dibuat!",
            });
        }
        res.status(500).json({
            error: "Data Karya Gagal dibuat!",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error ketika menambahkan data Karya!",
        });
    }
};

const postUlasan = async (req, res) => {
    const { id } = req.params;
    const { komentar } = req.body;

    try {
        const userId = req.user.id;

        const [result] = await database.query(`INSERT INTO ulasan (id_user, id_karya, komentar) VALUES ('${userId}', '${id}', '${komentar}')`);

        if (result.affectedRows > 0) {
            return res.json({
                message: "Komentar berhasil ditambahkan!",
            });
        }
        res.status(500).json({
            error: "Komentar gagal ditambahkan!",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error ketika menambahkan komentar!",
        });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createNewUser,
    postKarya,
    getAllKarya,
    getKaryaById,
    postUlasan,
}
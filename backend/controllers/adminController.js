const database = require('../model/database');

const getSeniman = async (req, res) => {
    try {
        const [results] = await database.query(`SELECT * FROM seniman`);
        res.json({
            seniman: results,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Gagal mengambil data Seniman!',
        });
    }
};

const postSeniman = async (req, res) => {
    const { nama, deskripsi } = req.body;
    const foto = req.file ? req.file.filename : null;

    try {
        const [result] = await database.query(
            `INSERT INTO seniman (nama, deskripsi, foto) VALUES ('${nama}', '${deskripsi}', '${foto}')`
        );

        if (result.affectedRows > 0) {
            return res.json({
                message: 'Data Seniman berhasil dibuat!',
            });
        }
        res.status(500).json({
            error: 'Data Seniman Gagal dibuat!',
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Error ketika menambahkan data Seniman!',
        });
    }
};

const getSenimanById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            error: 'Silahkan isi field id Seniman!',
        });
    }

    try {
        const [results] = await database.query(
            `SELECT * FROM seniman WHERE id = '${id}'`
        );
        if (Array.isArray(results) && results.length < 0) {
            res.json({
                seniman: [],
            });
        }
        res.json({
            seniman: results,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            error: 'Error mendapatkan data Seniman berdasarkan ID!',
        });
    }
};

const getJenisKarya = async (req, res) => {
    try {
        const [results] = await database.query(`SELECT * FROM jenis_karya`);

        if (Array.isArray(results) && results.length < 0) {
            res.json({
                karya: [],
            });
        }
        res.json({
            karya: results,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Gagal mengambil data Jenis Karya!',
        });
    }
};

const postJenisKarya = async (req, res) => {
    const { jenis } = req.body;
    try {
        const [result] = await database.query(
            `INSERT INTO jenis_karya (jenis) VALUES ('${jenis}')`
        );

        if (result.affectedRows > 0) {
            return res.json({
                message: 'Data jenis karya berhasil dibuat!',
            });
        }
        res.status(500).json({
            error: 'Data jenis karya gagal dibuat!',
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Error ketika menambahkan data jenis karya',
        });
    }
};

const getJenisKaryaById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            error: 'Silahkan isi field id jenis karya!',
        });
    }

    try {
        const [results] = await database.query(
            `SELECT * FROM jenis_karya WHERE id = '${id}'`
        );
        if (Array.isArray(results) && results.length < 0) {
            res.json({
                jenis_karya: [],
            });
        }
        res.json({
            jenis_karya: results,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            error: 'Error mendapatkan data Jenis Karya berdasarkan ID!',
        });
    }
};

const getBerita = async (req, res) => {
    try {
        const [results] = await database.query(`SELECT * FROM berita`);
        res.json({
            berita: results,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Gagal mengambil data Berita!',
        });
    }
};

const getBeritaById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            error: 'Silahkan isi field id Berita!',
        });
    }

    try {
        const [results] = await database.query(
            `SELECT * FROM berita WHERE id = '${id}'`
        );
        if (Array.isArray(results) && results.length < 0) {
            res.json({
                berita: [],
            });
        }
        res.json({
            berita: results,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            error: 'Error mendapatkan data Berita berdasarkan ID!',
        });
    }
};

const postBerita = async (req, res) => {
    const { judul, deskripsi } = req.body;
    const img = req.file ? req.file.filename : null;

    try {
        const [result] = await database.query(
            `INSERT INTO berita (judul, img, deskripsi) VALUES ('${judul}', '${img}', '${deskripsi}')`
        );

        if (result.affectedRows > 0) {
            return res.json({
                message: 'Data Berita berhasil dibuat!',
            });
        }
        res.status(500).json({
            error: 'Data Berita Gagal dibuat!',
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Error ketika menambahkan data Berita!',
        });
    }
};

const updateBeritaById = async (req, res) => {
    const { id } = req.params;
    const { judul, deskripsi } = req.body;
    const img = req.file ? req.file.filename : undefined;

    if (!id) {
        return res.status(400).json({
            error: 'Silahkan isi field ID',
        });
    }

    let query = 'UPDATE berita SET ';
    let queryParams = [];

    if (judul !== undefined) {
        query += 'judul = ?, ';
        queryParams.push(judul);
    }
    if (img !== undefined) {
        query += 'img = ?, ';
        queryParams.push(img);
    }
    if (deskripsi !== undefined) {
        query += 'deskripsi = ?, ';
        queryParams.push(deskripsi);
    }

    query = query.slice(0, -2) + ' WHERE id = ?';
    queryParams.push(id);

    try {
        const [result] = await database.query(query, queryParams);
        if (result.affectedRows > 0) {
            return res.json({
                message: 'Data berita updated!',
            });
        }
        res.status(500).json({
            error: 'Update data berita failed!',
        });
    } catch (error) {
        console.log('Error while updating berita data', error);
        res.status(500).json({
            error: 'Error while updating berita data',
        });
    }
};

const deleteBeritaById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            error: 'Silahkan isi field id!',
        });
    }
    try {
        const [result] = await database.query(
            `DELETE FROM berita WHERE id = '${id}'`
        );

        if (result.affectedRows > 0) {
            return res.json({
                message: `Berita has been Deleted with ID ${id}`,
            });
        }
        return res.status(500).json({
            error: `Error deleting data ${id}`,
        });
    } catch (error) {
        console.log(`Error while deleting Berita with ${id}`);
        return res.status(500).json({
            error: `Error while deleting berita with ${id}`,
        });
    }
};

const getAgenda = async (req, res) => {
    try {
        const [results] = await database.query(`SELECT * FROM agenda`);
        res.json({
            agenda: results,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Gagal mengambil data Agenda!',
        });
    }
};

const getAgendaById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            error: 'Silahkan isi field id Agenda!',
        });
    }

    try {
        const [results] = await database.query(
            `SELECT * FROM agenda WHERE id = '${id}'`
        );
        if (Array.isArray(results) && results.length < 0) {
            res.json({
                agenda: [],
            });
        }
        res.json({
            agenda: results,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            error: 'Error mendapatkan data Agenda berdasarkan ID!',
        });
    }
};

const postAgenda = async (req, res) => {
    const { judul, desc_singkat, penyelenggara, lokasi, tanggal, waktu } =
        req.body;

    try {
        const [result] = await database.query(
            `INSERT INTO agenda (judul, desc_singkat, penyelenggara, lokasi, tanggal, waktu) VALUES ('${judul}', '${desc_singkat}', '${penyelenggara}', '${lokasi}', '${tanggal}', '${waktu}')`
        );

        if (result.affectedRows > 0) {
            return res.json({
                message: 'Data Agenda berhasil dibuat!',
            });
        }
        res.status(500).json({
            error: 'Data Agenda Gagal dibuat!',
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Error ketika menambahkan data Agenda!',
        });
    }
};

const updateAgendaById = async (req, res) => {
    const { id } = req.params;
    const { judul, desc_singkat, penyelenggara, lokasi, tanggal, waktu } =
        req.body;

    if (!id) {
        return res.status(400).json({
            error: 'Silahkan isi field ID',
        });
    }

    let query = 'UPDATE agenda SET ';
    let queryParams = [];

    if (judul !== undefined) {
        query += 'judul = ?, ';
        queryParams.push(judul);
    }
    if (desc_singkat !== undefined) {
        query += 'desc_singkat = ?, ';
        queryParams.push(desc_singkat);
    }
    if (penyelenggara !== undefined) {
        query += 'penyelenggara = ?, ';
        queryParams.push(penyelenggara);
    }
    if (lokasi !== undefined) {
        query += 'lokasi = ?, ';
        queryParams.push(lokasi);
    }
    if (tanggal !== undefined) {
        query += 'tanggal = ?, ';
        queryParams.push(tanggal);
    }
    if (waktu !== undefined) {
        query += 'waktu = ?, ';
        queryParams.push(waktu);
    }

    query = query.slice(0, -2) + ' WHERE id = ?';
    queryParams.push(id);

    try {
        const [result] = await database.query(query, queryParams);
        if (result.affectedRows > 0) {
            return res.json({
                message: 'Data agenda updated!',
            });
        }
        res.status(500).json({
            error: 'Update data agenda failed!',
        });
    } catch (error) {
        console.log('Error while updating agenda data', error);
        res.status(500).json({
            error: 'Error while updating agenda data',
        });
    }
};

const deleteAgendaById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            error: 'Silahkan isi field id!',
        });
    }
    try {
        const [result] = await database.query(
            `DELETE FROM agenda WHERE id = '${id}'`
        );

        if (result.affectedRows > 0) {
            return res.json({
                message: `Agenda has been Deleted with ID ${id}`,
            });
        }
        return res.status(500).json({
            error: `Error deleting data ${id}`,
        });
    } catch (error) {
        console.log(`Error while deleting Agenda with ${id}`);
        return res.status(500).json({
            error: `Error while deleting agenda with ${id}`,
        });
    }
};

const getAllKarya = async (req, res) => {
    const { status } = req.body;
    try {
        const [results] = await database.query(
            `SELECT * FROM karya k INNER JOIN jenis_karya jk ON k.id_jenis = jk.id`
        );
        if (Array.isArray(results) && results.length < 0) {
            res.json({
                karya: [],
            });
        }
        res.json({
            karya: results,
        });
    } catch (error) {
        console.log(error);

        res.statu(500).json({
            error: 'Error getting karya data',
        });
    }
};

const getKaryaById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.statu(400).json({
            error: 'Silahkan isi field id user!',
        });
    }

    try {
        const [results] = await database.query(
            `SELECT * FROM karya WHERE id = '${id}'`
        );
        if (Array.isArray(results) && results.length < 0) {
            res.json({
                karya: [],
            });
        }
        res.json({
            karya: results,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            error: 'Error getting data karya by ID',
        });
    }
};

const updateKaryaById = async (req, res) => {
    const { id } = req.params;
    const {
        id_user,
        nama,
        email,
        id_jenis,
        alamat,
        judul_karya,
        deskripsi,
        status,
        threeD,
    } = req.body;
    const karya = req.file ? req.file.filename : null;

    if (!id) {
        return res.status(400).json({
            error: 'Silahkan isi field ID',
        });
    }

    let query = 'UPDATE karya SET ';
    let queryParams = [];

    if (id_user !== undefined) {
        query += 'id_user = ?, ';
        queryParams.push(id_user);
    }
    if (nama !== undefined) {
        query += 'nama = ?, ';
        queryParams.push(nama);
    }
    if (email !== undefined) {
        query += 'email = ?, ';
        queryParams.push(email);
    }
    if (id_jenis !== undefined) {
        query += 'id_jenis = ?, ';
        queryParams.push(id_jenis);
    }
    if (alamat !== undefined) {
        query += 'alamat = ?, ';
        queryParams.push(alamat);
    }
    if (judul_karya !== undefined) {
        query += 'judul_karya = ?, ';
        queryParams.push(judul_karya);
    }
    if (karya !== undefined) {
        query += 'karya = ?, ';
        queryParams.push(karya);
    }
    if (deskripsi !== undefined) {
        query += 'deskripsi = ?, ';
        queryParams.push(deskripsi);
    }
    if (status !== undefined) {
        query += 'status = ?, ';
        queryParams.push(status);
    }
    if (threeD !== undefined) {
        query += 'threeD = ?, ';
        queryParams.push(threeD);
    }

    query = query.slice(0, -2) + ' WHERE id = ?';
    queryParams.push(id);

    try {
        const [result] = await database.query(query, queryParams);
        if (result.affectedRows > 0) {
            return res.json({
                message: 'Data karya updated!',
            });
        }
        res.status(500).json({
            error: 'Update data karya failed!',
        });
    } catch (error) {
        console.log('Error while updating karya data', error);
        res.status(500).json({
            error: 'Error while updating karya data',
        });
    }
};

const getDashboardCounts = async (req, res) => {
    try {
        const [senimanCount] = await database.query(
            `SELECT COUNT(*) AS count FROM seniman`
        );
        const [beritaCount] = await database.query(
            `SELECT COUNT(*) AS count FROM berita`
        );
        const [karyaCount] = await database.query(
            `SELECT COUNT(*) AS count FROM karya`
        );
        const [agendaCount] = await database.query(
            `SELECT COUNT(*) AS count FROM agenda`
        );

        res.json({
            counts: {
                seniman: senimanCount[0].count,
                berita: beritaCount[0].count,
                karya: karyaCount[0].count,
                agenda: agendaCount[0].count,
            },
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Gagal mengambil jumlah data!',
        });
    }
};

module.exports = {
    getSeniman,
    postSeniman,
    getSenimanById,

    getJenisKarya,
    postJenisKarya,
    getJenisKaryaById,

    getBerita,
    getBeritaById,
    postBerita,
    updateBeritaById,
    deleteBeritaById,

    getAgenda,
    getAgendaById,
    postAgenda,
    updateAgendaById,
    deleteAgendaById,

    getAllKarya,
    getKaryaById,
    updateKaryaById,

    getDashboardCounts,
};

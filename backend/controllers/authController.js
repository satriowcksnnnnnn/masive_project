const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const database = require('../model/database');
const { SECRET } = require('../config/appConfig');

async function register(req, res) {
  const { name, email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({
      message: 'Bad request',
      errors: errors.array(),
    });

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // CHECK APAKAH USER UDAH DI DATABASE
    const [user] = await database.query(
      `SELECT email FROM user WHERE email = '${email}'`
    );

    if (user.length > 0)
      return res.json({
        error: 'Use another email!',
      });

    // SAVE NEW USER
    const [newUser] = await database.query(
      `INSERT INTO user (name, email, password) VALUES ('${name}', '${email}', '${hashedPassword}')`
    );

    const [users] = await database.query(
      `SELECT * FROM user WHERE email = '${email}'`
    );

    // BUAT JWT TOKEN
    const token = jwt.sign({ userId: users[0].id }, SECRET, {
      expiresIn: '1h',
      algorithm: 'HS256',
    });

    if (newUser.affectedRows > 0)
      return res.json({
        message: 'User created!',
        token,
        isAdmin: users[0].isAdmin,
      });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      error: 'Failed to register!',
    });
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({
      message: 'Bad request',
      errors: errors.array(),
    });

  try {
    const [users] = await database.query(
      `SELECT * FROM user WHERE email = '${email}'`
    );
    if (users.length === 0)
      return res.status(400).json({ message: 'Email atau password salah' });

    const user = users[0];

    // VERIFIKASI PASSWORD
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(400).json({ message: 'Email atau password salah' });
    }

    // BUAT JWT TOKEN
    const token = jwt.sign({ userId: user.id }, SECRET, {
      expiresIn: '1h',
      algorithm: 'HS256',
    });

    res.cookie('jwt', token, { maxAge: 60 * 60 * 1000 }); //ms
    res.json({
      token,
      message: 'Selamat anda berhasil Login',
      isAdmin: user.isAdmin,
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  register,
  login,
};

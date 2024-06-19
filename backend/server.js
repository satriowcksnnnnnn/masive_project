const express = require('express');
const app = express();
const errorHandler = require('./middlewares/errorHandler');
const logger = require('./middlewares/logger');
const userRoute = require('./routes/userRoute');
const { BASE_URL, PORT } = require('./config/appConfig');
const authRoute = require('./routes/authRoute');
const adminRoute = require('./routes/adminRoute');
const authMiddleware = require('./middlewares/authMiddleware');
const cors = require('cors');

// Middleware
app.use(express.static('files'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: '*',
  })
);
app.use(errorHandler);
app.use(logger);

// Route autentikasi
app.use('/api/auth', authRoute);

// Hanya user yang login bisa CRUD data users
// Route admin
app.use(authMiddleware);
app.use('/admin', adminRoute);
app.use('/', userRoute);

app.listen(PORT, () => console.log(`Server is running on ${BASE_URL}:${PORT}`));

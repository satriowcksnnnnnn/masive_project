const express = require("express");
const app = express();
const errorHandler = require("./middlewares/errorHandler");
const logger = require("./middlewares/logger");
const userRoute = require("./routes/userRoute");
const { BASE_URL, PORT } = require("./config/appConfig");
const authRoute = require("./routes/authRoute");
const adminRoute = require("./routes/adminRoute");
const authMiddleware = require("./middlewares/authMiddleware");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);
app.use(logger);

// Route autentikasi
app.use("/api/auth", authRoute);

// Route admin
app.use('/admin', adminRoute);

// Hanya user yang login bisa CRUD data users
app.use(authMiddleware);
app.use("/", userRoute);

app.listen(PORT, () => console.log(`Server is running on ${BASE_URL}:${PORT}`));
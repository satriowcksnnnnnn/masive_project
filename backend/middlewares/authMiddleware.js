const jwt = require("jsonwebtoken");
const { SECRET } = require("../config/appConfig");
const database = require("../model/database");

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: Token missing" });
    }

    try {
        const decodeToken = jwt.verify(token, SECRET, { algorithm: "HS256" });

        const [results] = await database.query(`SELECT * FROM user WHERE id = ?`, [decodeToken.userId]);

        if (!results.length) {
            return res.status(401).json({ message: "Unauthorized: User not found" });
        }

        req.user = results[0];
        next();
    } catch (error) {
        console.error("Token verification error:", error);
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};

module.exports = authMiddleware;
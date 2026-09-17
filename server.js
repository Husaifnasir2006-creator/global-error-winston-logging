const express = require("express");
const winston = require("winston");

const app = express();

app.use(express.json());

const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: "logs/app.log"
        }),
        new winston.transports.File({
            filename: "logs/error.log",
            level: "error"
        })
    ]
});

app.get("/", (req, res) => {
    logger.info("Home route accessed");

    res.json({
        message: "Global error handler and Winston logging are working"
    });
});

app.get("/error", (req, res, next) => {
    const error = new Error("This is a test error");
    next(error);
});

app.use((req, res, next) => {
    const error = new Error(`Route not found: ${req.originalUrl}`);
    error.statusCode = 404;
    next(error);
});

app.use((err, req, res, next) => {
    logger.error("Global error handler", {
        message: err.message,
        method: req.method,
        url: req.originalUrl,
        stack: err.stack
    });

    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    logger.info(`Server running on http://localhost:${PORT}`);
});
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
const logger_1 = __importDefault(require("../controller/logger"));
const api_routes_1 = __importDefault(require("../routes/api-routes"));
const config_1 = __importDefault(require("../config"));
const NAMESPACE = "MIDDLEWARE";
const Middleware = (app) => {
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use((0, cors_1.default)({
        origin: ["http://localhost:3000", "*"],
        methods: ["GET", "PUT", "POST", "DELETE"],
        credentials: true
    }));
    app.use((0, cookie_parser_1.default)());
    app.use((0, express_session_1.default)({
        genid: (req) => "userId",
        secret: config_1.default.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 60 * 60 * 24 * 1000
        }
    }));
    //Middleware that will log all request
    app.use((req, res, next) => {
        (0, logger_1.default)(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`, 'INFO');
        res.on("finish", () => {
            (0, logger_1.default)(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`, "INFO");
        });
        next();
    });
    //ROUTES
    app.use("/api", api_routes_1.default);
    app.use((req, res, next) => {
        const error = new Error("Page not found");
        return res.status(404).json({
            message: error.message
        });
    });
};
exports.default = Middleware;

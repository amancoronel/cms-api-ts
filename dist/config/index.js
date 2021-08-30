"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const SERVER_PORT = process.env.PORT || 6969;
const MONGO_URI = 'mongodb+srv://cmsApiTracker:cmsApiTracker@cluster0.2xp2q.mongodb.net/portfolio';
const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    autoIndex: true,
    retryWrites: false
};
const SALT_ROUND = 10;
const SESSION_SECRET = "SECRETCODE";
const TOKEN_SECRET = "SECRETTOKENCODE";
exports.default = {
    SERVER_PORT,
    MONGO_URI,
    MONGO_OPTIONS,
    SALT_ROUND,
    SESSION_SECRET,
    TOKEN_SECRET
};

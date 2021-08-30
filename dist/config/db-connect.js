"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = __importDefault(require("../controller/logger"));
const _1 = __importDefault(require("./"));
const NAMESPACE = "DB-CONNECT";
const dbConnection = () => {
    mongoose_1.default
        .connect(_1.default.MONGO_URI, _1.default.MONGO_OPTIONS)
        .then(result => {
        (0, logger_1.default)(NAMESPACE, `Database connected`, "INFO");
    })
        .catch(result => {
        (0, logger_1.default)(NAMESPACE, `Database disconnect`, "ERROR", result);
    });
};
exports.default = dbConnection;

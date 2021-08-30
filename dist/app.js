"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./controller/logger"));
const config_1 = __importDefault(require("./config"));
const db_connect_1 = __importDefault(require("./config/db-connect"));
const app_middleware_1 = __importDefault(require("./middleware/app.middleware"));
const app = express_1.default();
const NAMESPACE = "SERVER";
db_connect_1.default();
app_middleware_1.default(app);
app.listen(config_1.default.SERVER_PORT, () => {
    logger_1.default(NAMESPACE, `SERVER Running on [${config_1.default.SERVER_HOSTNAME}:${config_1.default.SERVER_PORT}]`, "INFO");
});

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
const app = (0, express_1.default)();
const NAMESPACE = "SERVER";
(0, db_connect_1.default)();
(0, app_middleware_1.default)(app);
app.listen(config_1.default.SERVER_PORT, () => {
    (0, logger_1.default)(NAMESPACE, `SERVER Running on PORT [${config_1.default.SERVER_PORT}]`, "INFO");
});

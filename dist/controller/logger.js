"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTimeStamp = () => {
    return new Date().toISOString();
};
const log = (namespace, message, type, object) => {
    console.log(`[${getTimeStamp()}] [${type.toUpperCase()}] [${namespace}] ${message}`, object ? object : '');
};
exports.default = log;

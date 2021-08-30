"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJwtToken = exports.signJwtToken = exports.decode = exports.encode = void 0;
const config_1 = __importDefault(require("../config"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const encode = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { password } = req.body;
    try {
        console.log("***** req123", req.body);
        const hash = yield bcryptjs_1.default.hash(password, config_1.default.SALT_ROUND);
        req.body.password = hash;
        console.log("***** req1234567", req.body);
        next();
    }
    catch (e) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.encode = encode;
const decode = (data) => {
    return new Promise((resolve, reject) => {
        const { inputPassword, hashPassword } = data;
        bcryptjs_1.default.compare(inputPassword, hashPassword, (err, result) => {
            resolve(result);
        });
    });
};
exports.decode = decode;
const signJwtToken = (info) => __awaiter(void 0, void 0, void 0, function* () {
    return jsonwebtoken_1.default.sign({ user: info }, config_1.default.TOKEN_SECRET, { expiresIn: 28800 });
});
exports.signJwtToken = signJwtToken;
const validateJwtToken = (req, res, next) => {
    try {
        let bearer = req.get("Authorization");
        if (!bearer)
            throw "Session Expired";
        let token = bearer.split(" ")[1];
        let payload = jsonwebtoken_1.default.verify(token, config_1.default.TOKEN_SECRET);
        if (!payload)
            throw "Invalid token";
        next();
    }
    catch (err) {
        res.status(401).json({ message: err });
    }
};
exports.validateJwtToken = validateJwtToken;

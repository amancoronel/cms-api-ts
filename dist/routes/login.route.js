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
const userDetail_controller_1 = __importDefault(require("../controller/userDetail.controller"));
const coder_1 = require("../controller/coder");
const LoginRoute = (router) => {
    router.get("/login", (req, res) => {
        if (req.session.user) {
            res.status(200).json({ user: req.session.user, access_token: req.session.token });
        }
        else {
            res.status(401).json({ message: "Unauthorized" });
        }
    });
    router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { username, password } = req.body;
            const user = yield userDetail_controller_1.default.getSingleUserDetails(username);
            if (!user)
                throw new Error();
            const result = yield coder_1.decode({ inputPassword: password, hashPassword: user.password });
            if (!result)
                throw new Error();
            const token = yield coder_1.signJwtToken({ username });
            const user_data = user;
            user_data.password = null;
            req.session.user = user_data;
            req.session.token = token;
            res.status(200).json({ message: "Login Successful", user: req.session.user, access_token: token });
        }
        catch (e) {
            res.status(400).json({ message: "Invalid credentials" });
        }
    }));
    router.post("/logout", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        if (req.session.user) {
            req.session.destroy();
        }
    }));
};
exports.default = LoginRoute;

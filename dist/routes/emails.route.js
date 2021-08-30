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
const email_controller_1 = __importDefault(require("../controller/email.controller"));
const EmailsRoute = (router) => {
    router.get('/getEmail', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield email_controller_1.default.getEmails();
            res.status(200).json({ result: data });
        }
        catch (e) {
            res.status(400).json({ result: e });
        }
    }));
    router.post('/sendEmail', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield email_controller_1.default.sendEmails(req.body);
            res.status(200).json({ message: "Success" });
        }
        catch (e) {
            res.status(500).json({ message: "Internal Service Error" });
        }
    }));
    router.post('/addEmail', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield email_controller_1.default.addEmails(req.body);
            res.status(200).json({ result: data });
        }
        catch (e) {
            res.status(400).json({ result: e });
        }
    }));
    router.put('/updateEmail/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield email_controller_1.default.updateEmails(req.params.id, req.body);
            res.status(200).json({ result: data });
        }
        catch (e) {
            res.status(400).json({ result: e });
        }
    }));
    router.delete('/deleteEmail/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield email_controller_1.default.deleteEmails(req.params.id);
            res.status(200).json({ result: data });
        }
        catch (e) {
            res.status(400).json({ result: e });
        }
    }));
};
exports.default = EmailsRoute;

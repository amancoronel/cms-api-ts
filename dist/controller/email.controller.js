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
const emails_models_1 = __importDefault(require("../models/emails.models"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const email_config_1 = require("../config/email-config");
const getEmails = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield emails_models_1.default.find();
});
const addEmails = (data) => __awaiter(void 0, void 0, void 0, function* () {
    emails_models_1.default.create(data);
    return getEmails();
});
const updateEmails = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield emails_models_1.default.findOneAndUpdate({ _id: id }, { $set: data }, { new: true });
});
const deleteEmails = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield emails_models_1.default.deleteOne({ _id: id });
    return getEmails();
});
const sendEmails = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const transporter = nodemailer_1.default.createTransport({
        service: 'gmail',
        auth: {
            user: email_config_1.EMAIL,
            pass: email_config_1.PASSWORD
        }
    });
    const mailOptions = {
        from: email_config_1.EMAIL,
        to: data.recipient,
        subject: data.subject,
        text: data.content
    };
    return yield transporter.sendMail(mailOptions);
});
exports.default = {
    getEmails,
    addEmails,
    updateEmails,
    deleteEmails,
    sendEmails
};

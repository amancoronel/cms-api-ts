"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const EmailSchema = new mongoose_1.Schema({
    sender_name: { type: String, required: true },
    sender_email: { type: String, required: true },
    subject: { type: String, required: true },
    content: { type: String, required: true },
    status: { type: Number, default: 0 },
}, {
    timestamps: true
});
exports.default = mongoose_1.model("emails", EmailSchema);

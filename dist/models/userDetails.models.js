"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    username: { type: String, required: true, unique: true },
    first_name: { type: String },
    last_name: { type: String },
    age: { type: Number },
    contact_number: { type: String },
    email: { type: String },
    info: { type: String },
    password: { type: String },
    role: { type: Number }
});
exports.default = mongoose_1.model('user_details', UserSchema);

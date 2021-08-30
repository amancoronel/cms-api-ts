"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SkillSchema = new mongoose_1.Schema({
    title: { type: String },
    logo: { type: String },
    status: { type: Boolean, required: true, default: true }
});
exports.default = (0, mongoose_1.model)("skills", SkillSchema);

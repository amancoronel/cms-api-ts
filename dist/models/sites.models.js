"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SiteSchema = new mongoose_1.Schema({
    name: { type: String },
    link: { type: String },
    status: { type: Boolean, default: true }
});
exports.default = mongoose_1.model("sites", SiteSchema);

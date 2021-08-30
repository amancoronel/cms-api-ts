"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProjectSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    link: { type: String, required: true },
    techStack: { type: String, required: true },
    status: { type: Boolean, required: true, default: true }
});
exports.default = (0, mongoose_1.model)("projects", ProjectSchema);

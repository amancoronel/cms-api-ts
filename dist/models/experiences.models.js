"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ExperienceSchema = new mongoose_1.Schema({
    company_name: { type: String, required: true },
    location: { type: String, required: true },
    year_started: { type: String, required: true },
    year_ended: { type: String, required: true },
    status: { type: Boolean, default: true }
});
exports.default = (0, mongoose_1.model)("experiences", ExperienceSchema);

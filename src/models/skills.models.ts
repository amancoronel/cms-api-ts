import { model, Schema } from "mongoose";
import Skills from "../interfaces/skills.interface";

const SkillSchema:Schema = new Schema(
    {
        title: { type: String },
        logo: { type: String },
        status: {type: Boolean, required: true, default: true}

    }
)

export default model<Skills>("skills", SkillSchema);
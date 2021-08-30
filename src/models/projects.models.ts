import { model, Schema } from "mongoose";
import Projects from "../interfaces/projects.interface";

const ProjectSchema:Schema = new Schema({
    title: {type: String, required: true},
    link: { type: String, required: true},
    techStack: { type: String, required: true},
    status: {type: Boolean, required: true, default: true}
})

export default model<Projects>("projects", ProjectSchema);
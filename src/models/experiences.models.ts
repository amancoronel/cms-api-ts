import {model, Schema} from 'mongoose';
import Experiences from '../interfaces/experiences.interface';

const ExperienceSchema: Schema = new Schema(
    {
        company_name : {type: String, required: true},
        location: {type: String, required: true},
        year_started: {type: String, required: true},
        year_ended: { type: String, required: true},
        status: { type: Boolean, default: true}
    }
)

export default model<Experiences>("experiences", ExperienceSchema);
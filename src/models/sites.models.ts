import {model, Schema} from 'mongoose';
import Sites from '../interfaces/sites.interface';

const SiteSchema:Schema = new Schema({
    name: {type: String},
    link: {type: String},
    status: {type: Boolean, default: true}
})

export default model<Sites>("sites", SiteSchema);
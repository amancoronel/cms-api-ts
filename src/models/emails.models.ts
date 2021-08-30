import { model, Schema } from "mongoose";
import Emails from "../interfaces/emails.interface";

const EmailSchema: Schema = new Schema(
    {
        sender_name: {type: String, required: true},
        sender_email: {type: String, required: true},
        subject: {type: String, required: true},
        content: {type: String, required: true},
        status: {type: Number, default: 0},
    }, {
        timestamps : true
    }
)

export default model<Emails>("emails", EmailSchema);
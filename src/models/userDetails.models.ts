import { model, Schema } from "mongoose";
import UserDetails from "../interfaces/userDetails.interface";

const UserSchema:Schema = new Schema(
    {
        username: {type:String, required: true, unique: true},
        first_name: { type: String},
        last_name: { type: String },
        age: { type: Number },
        contact_number: { type: String },
        email: {type: String},
        info: { type: String },
        password: {type: String},
        role: {type: Number}
    }
)

export default model<UserDetails>('user_details', UserSchema);
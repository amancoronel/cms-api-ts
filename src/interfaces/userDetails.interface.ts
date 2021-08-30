import {Document} from "mongoose";

interface UserDetails extends Document {
    username: string
    first_name: string
    last_name: string
    age: number
    contact_number: string
    email: string
    info: string
    password: string
    role: number
}

export default UserDetails;
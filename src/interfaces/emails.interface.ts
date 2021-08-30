import { Document } from 'mongoose';

interface Emails extends Document {
    sender_name: string
    sender_email: string
    subject: string
    content: string
    status: number
}

export default Emails
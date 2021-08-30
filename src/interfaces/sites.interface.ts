import { Document } from 'mongoose';

interface Sites extends Document {
    name: string
    link: string
    status: boolean
}

export default Sites;
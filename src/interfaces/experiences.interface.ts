import { Document } from 'mongoose';

interface Experiences extends Document {
    company_name: string
    location: string
    year_started: string
    year_ended: string
    status: boolean
}

export default Experiences
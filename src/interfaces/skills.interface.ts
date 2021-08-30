import { Document } from 'mongoose';

interface Skills extends Document {
    title: string
    logo: string
    status: boolean
}

export default Skills;
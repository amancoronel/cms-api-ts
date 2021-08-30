import { Document } from 'mongoose';

interface Projects extends Document {
    title: string
    link: string
    techStack: string
    status: boolean
}

export default Projects;
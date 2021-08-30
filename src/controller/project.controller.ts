import projectsModels from "../models/projects.models";
import Projects from "../interfaces/projects.interface";

const getProjects = async (): Promise<Projects[]> => {
    return await projectsModels.find();
}

const addProjects = async (data:Projects): Promise<Projects[]> => {
    projectsModels.create(data);
    return getProjects();
}

const updateProjects = async (id: string, data: Projects) => {
    return await projectsModels.findOneAndUpdate({_id: id}, { $set: data}, {new : true})
}

const deleteProjects = async (id: string):Promise<Projects[]> => {
    await projectsModels.deleteOne({_id: id});
    return getProjects();
}

export default {
    getProjects,
    addProjects,
    updateProjects,
    deleteProjects
}
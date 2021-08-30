import experiencesModels from "../models/experiences.models";
import Experiences from "../interfaces/experiences.interface";

const getExperiences = async (): Promise<Experiences[]> => {
    return await experiencesModels.find();
}

const addExperiences = async (data:Experiences): Promise<Experiences[]> => {
    experiencesModels.create(data);
    return getExperiences();
}

const updateExperiences = async (id: string, data: Experiences) => {
    return await experiencesModels.findOneAndUpdate({_id: id}, { $set: data}, {new : true})
}

const deleteExperiences = async (id: string):Promise<Experiences[]> => {
    await experiencesModels.deleteOne({_id: id});
    return getExperiences();
}

export default {
    getExperiences,
    addExperiences,
    updateExperiences,
    deleteExperiences
}
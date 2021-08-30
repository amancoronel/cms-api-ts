import skillsModels from "../models/skills.models";
import Skills from "../interfaces/skills.interface";

const getSkills = async (): Promise<Skills[]> => {
    return await skillsModels.find();
}

const addSkills = async (data:Skills): Promise<Skills[]> => {
    skillsModels.create(data);
    return getSkills();
}

const updateSkills = async (id: string, data: Skills) => {
    return await skillsModels.findOneAndUpdate({_id: id}, { $set: data}, {new : true})
}

const deleteSkills = async (id: string):Promise<Skills[]> => {
    await skillsModels.deleteOne({_id: id});
    return getSkills();
}

export default {
    getSkills,
    addSkills,
    updateSkills,
    deleteSkills
}
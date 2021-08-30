import sitesModels from "../models/sites.models";
import Sites from "../interfaces/sites.interface";

const getSites = async (): Promise<Sites[]> => {
    return await sitesModels.find();
}

const addSites = async (data:Sites): Promise<Sites[]> => {
    sitesModels.create(data);
    return getSites();
}

const updateSites = async (id: string, data: Sites) => {
    return await sitesModels.findOneAndUpdate({_id: id}, { $set: data}, {new : true});
}

const deleteSites = async (id: string):Promise<Sites[]> => {
    await sitesModels.deleteOne({_id: id});
    return getSites();
}

export default {
    getSites,
    addSites,
    updateSites,
    deleteSites
}
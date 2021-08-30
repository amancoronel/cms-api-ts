import userDetailsModels from "../models/userDetails.models";
import UserDetails from "../interfaces/userDetails.interface";


const getUserDetails = async (): Promise<UserDetails[]> => {
    return await userDetailsModels.find();
}

const addUserDetails = async (data:UserDetails) => {
    return await userDetailsModels.create(data);
}

const updateUserDetails = async (id:string, data:UserDetails) => {
    return await userDetailsModels.findOneAndUpdate({_id: id}, { $set: data }, {new : true})
}

const getSingleUserDetails = async (username: string) => {
    return new Promise((resolve, reject) => {
        userDetailsModels.find({username}, (err, data) => {
            if(!err) resolve(data[0]);
            else reject(err);
        });
    })
}

export default {
    getUserDetails,
    updateUserDetails,
    addUserDetails,
    getSingleUserDetails
}
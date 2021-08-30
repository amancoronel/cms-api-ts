import emailsModels from "../models/emails.models";
import Emails from "../interfaces/emails.interface";
import nodemailer, { Transporter } from 'nodemailer';
import { EMAIL, PASSWORD } from "../config/email-config";
import { getMaxListeners } from "process";

interface Email {
    recipient: string
    subject: string
    content: string
}


const getEmails = async (): Promise<Emails[]> => {
    return await emailsModels.find();
}

const addEmails = async (data:Emails): Promise<Emails[]> => {
    emailsModels.create(data);
    return getEmails();
}

const updateEmails = async (id: string, data: Emails) => {
    return await emailsModels.findOneAndUpdate({_id: id}, { $set: data}, {new : true})
}

const deleteEmails = async (id: string):Promise<Emails[]> => {
    await emailsModels.deleteOne({_id: id});
    return getEmails();
}

const sendEmails = async (data:Email) => {
    const transporter:Transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: EMAIL,
            pass: PASSWORD
        }
        });
        
    const mailOptions = {
        from: EMAIL,
        to: data.recipient,
        subject: data.subject,
        text: data.content
    };
        
    return await transporter.sendMail(mailOptions)
}

export default {
    getEmails,
    addEmails,
    updateEmails,
    deleteEmails,
    sendEmails
}
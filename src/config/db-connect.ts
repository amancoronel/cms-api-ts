import mongoose from 'mongoose';
import log from '../controller/logger';
import config from './';

const NAMESPACE = "DB-CONNECT"

const dbConnection = () => {
    mongoose
    .connect(config.MONGO_URI, config.MONGO_OPTIONS)
    .then(result => {
        log(NAMESPACE, `Database connected`, "INFO")
        } 
    )
    .catch(result => {
        log(NAMESPACE, `Database disconnect`, "ERROR", result)
    })
}

export default dbConnection;


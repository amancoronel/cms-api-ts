import express, {Request, Response, NextFunction} from 'express';
import log from './controller/logger';
import config from './config';
import router from './routes/api-routes';
import dbConnection from './config/db-connect';
import Middleware  from './middleware/app.middleware';

const app = express();
const NAMESPACE = "SERVER";

dbConnection();

Middleware(app);

app.listen(config.SERVER_PORT, () => {
    log(NAMESPACE, `SERVER Running on PORT [${config.SERVER_PORT}]`, "INFO");
});
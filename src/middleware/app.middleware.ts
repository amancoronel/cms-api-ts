import express, { Express, Request, Response, NextFunction } from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import session from "express-session";
import log from "../controller/logger";
import router from "../routes/api-routes";
import userDetailController from "../controller/userDetail.controller";
import config from "../config";

const NAMESPACE = "MIDDLEWARE"
const Middleware = (app: Express) => {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}))
    app.use(cors({
        origin: ["http://localhost:3000", "http://localhost:3001"],
        methods: ["GET", "PUT", "POST", "DELETE"],
        credentials: true
    }))
    app.use(cookieParser());
    app.use(session({
        genid: (req) => "userId",
        secret: config.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 60 * 60 * 24 * 1000
        }
    }))

    //Middleware that will log all request
    app.use((req:Request, res:Response, next:NextFunction) => {
        log(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`, 'INFO')

        res.on("finish", () => {
            log(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`, "INFO");
        })

        next();
    })

    //ROUTES
    app.use("/api", router);

    app.use((req:Request, res:Response, next:NextFunction) => {
        const error = new Error("Page not found");
    
        return res.status(404).json({
            message: error.message
        })
    })
}

export default Middleware
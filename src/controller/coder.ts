import {Request, Response, NextFunction, response} from 'express';
import config from '../config';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface User {
    inputPassword: string
    hashPassword: string
}

interface JwtInfo {
    username: string
}

const encode = async (req:Request, res:Response, next:NextFunction) => {
    const { password } = req.body;
    try {
        console.log("***** req123", req.body);
        const hash = await bcrypt.hash(password, config.SALT_ROUND)
        req.body.password = hash;
        console.log("***** req1234567", req.body);
        next();
    } catch(e) {
        res.status(500).json({ message: "Internal Server Error"})
    }
}

const decode = (data:User) => {
    return new Promise((resolve, reject) => {
        const { inputPassword, hashPassword } = data;
        bcrypt.compare(inputPassword, hashPassword, (err, result) => {
            resolve(result);
        })
    })
}

const signJwtToken = async (info: JwtInfo) => {
    return jwt.sign({user : info}, config.TOKEN_SECRET, {expiresIn : 28800});
}

const validateJwtToken = (req:Request, res:Response, next:NextFunction) => {
    try {
        let bearer = req.get("Authorization");
        if(!bearer) throw "Session Expired"; 
        let token = bearer.split(" ")[1];
        let payload = jwt.verify(token, config.TOKEN_SECRET);
        if(!payload) throw "Invalid token";
        next(); 
    } catch(err) {
        res.status(401).json({message : err})
    }
}

export {
    encode,
    decode,
    signJwtToken,
    validateJwtToken
}
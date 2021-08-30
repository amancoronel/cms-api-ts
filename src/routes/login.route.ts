import {Response, Router} from 'express';
import Request from '../interfaces/request.interface';
import userDetailController from '../controller/userDetail.controller';
import { decode, signJwtToken } from '../controller/coder';

const LoginRoute = (router:Router) => {
    router.get("/login", (req:Request, res:Response) => {
        if(req.session.user) {
            res.status(200).json({user : req.session.user, access_token: req.session.token})
        } else {
            res.status(401).json({message: "Unauthorized"});
        }
    })

    router.post("/login", async (req:Request, res:Response) => {
        try{
            const { username, password } = req.body;
            const user:any = await userDetailController.getSingleUserDetails(username);
            if(!user) throw new Error();
            const result = await decode({inputPassword: password, hashPassword : user.password});
            if(!result) throw new Error();
            const token = await signJwtToken({username});
            const user_data = user;
            user_data.password = null;
            req.session.user = user_data;
            req.session.token = token;
            res.status(200).json({ message: "Login Successful", user: req.session.user, access_token: token})
        } catch(e) {
            res.status(400).json({ message: "Invalid credentials"})
        }
    })

    router.post("/logout", async (req: Request, res: Response) => {
        if(req.session.user) {
            req.session.destroy();
        }
    })
}

export default LoginRoute;
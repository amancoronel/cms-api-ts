import { Router, Request, Response } from "express";
import userDetailController from "../controller/userDetail.controller";
import { encode } from "../controller/coder";

const UserDetailsRoute = (router:Router) => {
    router.get('/getUserDetail', async (req:Request, res:Response) => {
        try {
            const data = await userDetailController.getUserDetails();
            res.status(200).json({ result : data } );
        } catch(e) {
            res.status(400).json({ result : e } );
        }
    });

    router.post('/addUserDetail', encode, async (req: Request, res:Response) => {
        try {
            const data = await userDetailController.addUserDetails(req.body);
            res.status(200).json({ result : data } );
        } catch(e) {
            res.status(400).json({ result : e } );
        }
    })

    router.delete('/updateUserDetail/:id', async (req:Request, res: Response) => {
        try {
            const data = await userDetailController.updateUserDetails(req.params.id, req.body);
            res.status(200).json({ result : data } );
        } catch(e) {
            res.status(400).json({ result : e } );
        }
    })
}

export default UserDetailsRoute;
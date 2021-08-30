import { Router, Request, Response } from "express";
import emailController from "../controller/email.controller";

const EmailsRoute = (router:Router) => {
    router.get('/getEmail', async (req:Request, res:Response) => {
        try {
            const data = await emailController.getEmails();
            res.status(200).json({ result : data } );
        } catch(e) {
            res.status(400).json({ result : e } );
        }
    })

    router.post('/sendEmail', async (req: Request, res:Response) => {
        try {
            await emailController.sendEmails(req.body);
            res.status(200).json({ message: "Success"})
        } catch(e) {
            res.status(500).json({ message: "Internal Service Error" } );

        }
    })

    router.post('/addEmail', async (req:Request, res: Response) => {
        try {
            const data = await emailController.addEmails(req.body);
            res.status(200).json({ result : data } );
        } catch(e) {
            res.status(400).json({ result : e } );
        }
    })

    router.put('/updateEmail/:id', async (req:Request, res: Response) => {
        try {
            const data = await emailController.updateEmails(req.params.id, req.body);
            res.status(200).json({ result : data } );
        } catch(e) {
            res.status(400).json({ result : e } );
        }
    })

    router.delete('/deleteEmail/:id', async (req:Request, res: Response) => {
        try {
            const data = await emailController.deleteEmails(req.params.id);
            res.status(200).json({ result : data } );
        } catch(e) {
            res.status(400).json({ result : e } );
        }
    })
}

export default EmailsRoute;
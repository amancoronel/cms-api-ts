import { Router, Request, Response } from "express";
import experienceController from "../controller/experience.controller";

const ExperiencesRoute = (router:Router) => {
    router.get('/getExperience', async (req:Request, res:Response) => {
        try {
            const data = await experienceController.getExperiences();
            res.status(200).json({ result : data } );
        } catch(e) {
            res.status(400).json({ result : e } );
        }
    })

    router.post('/addExperience', async (req:Request, res: Response) => {
        try {
            console.log("(( req", req.body);
            const data = await experienceController.addExperiences(req.body);
            res.status(200).json({ result : data } );
        } catch(e) {
            res.status(400).json({ result : e } );
        }
    })

    router.put('/updateExperience/:id', async (req:Request, res: Response) => {
        try {
            const data = await experienceController.updateExperiences(req.params.id, req.body);
            res.status(200).json({ result : data } );
        } catch(e) {
            res.status(400).json({ result : e } );
        }
    })

    router.delete('/deleteExperience/:id', async (req:Request, res: Response) => {
        try {
            const data = await experienceController.deleteExperiences(req.params.id);
            res.status(200).json({ result : data } );
        } catch(e) {
            res.status(400).json({ result : e } );
        }
    })
}

export default ExperiencesRoute;
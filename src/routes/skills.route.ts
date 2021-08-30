import { Router, Request, Response } from "express";
import skillController from "../controller/skill.controller";

const SkillsRoute = (router:Router) => {
    router.get('/getSkill', async (req:Request, res:Response) => {
        try {
            const data = await skillController.getSkills();
            res.status(200).json({ result : data } );
        } catch(e) {
            res.status(400).json({ result : e } );
        }
    })

    router.post('/addSkill', async (req:Request, res: Response) => {
        try {
            const data = await skillController.addSkills(req.body);
            res.status(200).json({ result : data } );
        } catch(e) {
            res.status(400).json({ result : e } );
        }
    })

    router.put('/updateSkill/:id', async (req:Request, res: Response) => {
        try {
            const data = await skillController.updateSkills(req.params.id, req.body);
            res.status(200).json({ result : data } );
        } catch(e) {
            res.status(400).json({ result : e } );
        }
    })

    router.delete('/deleteSkill/:id', async (req:Request, res: Response) => {
        try {
            const data = await skillController.deleteSkills(req.params.id);
            res.status(200).json({ result : data } );
        } catch(e) {
            res.status(400).json({ result : e } );
        }
    })
}

export default SkillsRoute;
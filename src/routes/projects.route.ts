import { Router, Request, Response } from "express";
import projectController from "../controller/project.controller";

const ProjectsRoute = (router:Router) => {
    router.get('/getProject', async (req:Request, res:Response) => {
        try {
            const data = await projectController.getProjects();
            res.status(200).json({ result : data } );
        } catch(e) {
            res.status(400).json({ result : e } );
        }
    })

    router.post('/addProject', async (req:Request, res: Response) => {
        try {
            const data = await projectController.addProjects(req.body);
            res.status(200).json({ result : data } );
        } catch(e) {
            res.status(400).json({ result : e } );
        }
    })

    router.put('/updateProject/:id', async (req:Request, res: Response) => {
        try {
            const data = await projectController.updateProjects(req.params.id, req.body);
            res.status(200).json({ result : data } );
        } catch(e) {
            res.status(400).json({ result : e } );
        }
    })

    router.delete('/deleteProject/:id', async (req:Request, res: Response) => {
        try {
            const data = await projectController.deleteProjects(req.params.id);
            res.status(200).json({ result : data } );
        } catch(e) {
            res.status(400).json({ result : e } );
        }
    })
}

export default ProjectsRoute;
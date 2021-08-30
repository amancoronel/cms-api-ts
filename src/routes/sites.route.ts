import { Router, Request, Response } from "express";
import siteController from "../controller/site.controller";

const SitesRoute = (router:Router) => {
    router.get('/getSite', async (req:Request, res:Response) => {
        try {
            const data = await siteController.getSites();
            res.status(200).json({ result : data } );
        } catch(e) {
            res.status(400).json({ result : e } );
        }
    })

    router.post('/addSite', async (req:Request, res: Response) => {
        try {
            const data = await siteController.addSites(req.body);
            res.status(200).json({ result : data } );
        } catch(e) {
            res.status(400).json({ result : e } );
        }
    })

    router.put('/updateSite/:id', async (req:Request, res: Response) => {
        try {
            const data = await siteController.updateSites(req.params.id, req.body);
            res.status(200).json({ result : data } );
        } catch(e) {
            res.status(400).json({ result : e } );
        }
    })

    router.delete('/deleteSite/:id', async (req:Request, res: Response) => {
        try {
            const data = await siteController.deleteSites(req.params.id);
            res.status(200).json({ result : data } );
        } catch(e) {
            res.status(400).json({ result : e } );
        }
    })
}

export default SitesRoute;
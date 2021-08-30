import express, {Request, Response} from 'express';
import ExperiencesRoute from './experiences.route';
import ProjectsRoute from './projects.route';
import SitesRoute from './sites.route';
import SkillsRoute from './skills.route';
import UserDetailsRoute from './userDetails.route';
import EmailsRoute from './emails.route';
import LoginRoute from './login.route';
const router = express.Router();

ExperiencesRoute(router);
ProjectsRoute(router);
SitesRoute(router);
SkillsRoute(router);
UserDetailsRoute(router);
EmailsRoute(router);
LoginRoute(router);

export default router;
import { Router } from 'express';
import { sortRoute } from './controller/sortStats/index';

const mainRouter = Router();
mainRouter.use('/', sortRoute)

export default mainRouter;

import { Router } from 'express';
import { sortStatsRoute , unSortedObjectRoute } from './controller/index';


const mainRouter = Router();
mainRouter.use('/sortStats', sortStatsRoute)
mainRouter.use('/unSortedObject', unSortedObjectRoute)

export default mainRouter;

import { Router } from 'express';
import { unSortedRoute} from './controllers/unSortedObjects/index';
import { sortStatsRoute} from './controllers/sortStats/index';


const mainRouter = Router();
mainRouter.use('/', unSortedRoute);
mainRouter.use('/m', sortStatsRoute)

export default mainRouter;

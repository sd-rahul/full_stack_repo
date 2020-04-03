import { Router } from 'express';
import SortController from './controller'
import config from './validation'
import { validationHandler } from '../../libs/routes/index'

const sortStatsRoute = Router();

sortStatsRoute.route('/')
    .post(validationHandler(config.create), SortController.create)
    .get(SortController.list);


export default sortStatsRoute;

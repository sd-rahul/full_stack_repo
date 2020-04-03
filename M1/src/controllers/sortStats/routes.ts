import { Router } from 'express';
import SortStatsController from './controller'
import config from './validation'
import { validationHandler } from '../../libs/routes/index'

const sortStatsRoute = Router();

sortStatsRoute.route('/sortStats/')
    .get(validationHandler(config.get), SortStatsController.get)
    .put(validationHandler(config.create), SortStatsController.update)
    .post(SortStatsController.list)

export default sortStatsRoute;

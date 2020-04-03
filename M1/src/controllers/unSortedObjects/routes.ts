import { Router } from 'express';
import ObjectController from './controller'
import config from './validation'
import { validationHandler } from '../../libs/routes/index'

const unSortedRoute = Router();
unSortedRoute.route('/unSortedObject')
    .post(validationHandler(config.create), ObjectController.create)
    .get(ObjectController.list)

export default unSortedRoute;

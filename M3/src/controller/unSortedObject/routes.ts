import { Router } from 'express';
import unSortedObjectController from './controller'
import config from './validation'
import { validationHandler } from '../../libs/routes/index'

const unSortedObjectRoute = Router();

unSortedObjectRoute.route('/')
    .post(validationHandler(config.create), unSortedObjectController.create);

export default unSortedObjectRoute;

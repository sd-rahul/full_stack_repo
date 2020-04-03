import { Router } from 'express';
import SortController from './controller'
import config from './validation'
import { validationHandler } from '../../libs/routes/index'

const sortRoute = Router();

sortRoute.route('/sort')
    .post( SortController.create);

export default sortRoute;

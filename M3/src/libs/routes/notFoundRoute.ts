import * as express from 'express';

const notFoundRoute = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log('Not Found');
    next({ error: 'Not Found', status: '404', message: 'error' });
};
export default notFoundRoute;

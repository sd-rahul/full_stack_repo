import * as express from 'express';

const errorHandler = (err, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (Array.isArray(err.error)) {
        res.send({
            error: err.error,
            message: err.message,
            status: err.status,
            timestamp: new Date(),
        });
    }
    else {
        console.log(err);
        res.send({
            error: err,
            timestamp: new Date(),
        }
        );
    }
};

export default errorHandler;
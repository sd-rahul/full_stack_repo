import * as express from 'express';
import { Request, Response, NextFunction } from 'express';

const validationHandler = (config: object) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const configKeys = Object.keys(config);
        const finalErrorMessages = {};
        configKeys.forEach((element) => {
            const errorMessages = [];
            const keyRestictions = config[element];
            const keys = (Object.keys(keyRestictions));
            const values = (keyRestictions.in).map(inside => req[inside][element])
                .filter(ele => ele);
            const inValue = (keyRestictions.in);
            const body = req[inValue[0]];
            const bodyKeys = Object.keys(body);
            const value = values.length ? values[0] : undefined;

            if (keys.includes('required')) {
                if (keyRestictions.required && !value) {
                    next({
                        error: `${element} is required`,
                        message: `${element} is required`,
                        status: 500,
                    });
                } else {
                    if (keys.includes('number')) {
                        if ((keyRestictions.number) && isNaN(value) && value) {
                            errorMessages.push(`${element} should be in number `);
                        }
                        else if ((keyRestictions.number) && !(value>0)) {
                            errorMessages.push(`${element} should be positive `);
                        }
                    }
                    if (keys.includes('string')) {
                        if ((keyRestictions.string) && typeof value !== 'string') {
                            errorMessages.push(`${element} should be in string`);
                        }
                    }
                }
            }
            if (errorMessages.toString() !== '') {
                finalErrorMessages[element] = errorMessages.toString();
            }
        });
        if ((Object.keys(finalErrorMessages)).length !== 0) {
            next(finalErrorMessages);

        } else {
            console.log('Inside Validation');
            next();
        }
    };
};
export default validationHandler;

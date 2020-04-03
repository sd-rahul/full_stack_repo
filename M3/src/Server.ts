import * as express from 'express';
import * as bodyParser from 'body-parser';
var cors = require('cors')
import Iconfig from './config/Iconfig';
import mainRouter from './Router';
import {notFoundRoute, errorHandler} from './libs/routes/index';

class Server {
    app: express.Express;
    constructor(private config: Iconfig) {
        this.app = express();
    }

    bootstrap() {
        const { app } = this;
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }
    
    setupRoutes() {
        const { app } = this;
        app.use(cors())
        app.use('/M3', mainRouter);
        app.use(notFoundRoute);
        app.use(errorHandler);
    }

    initBodyParser() {
        const { app } = this;
        // parse application/x-www-form-urlencoded
        app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

        // parse application/json
        app.use(bodyParser.json({limit: '50mb'}));
    }

    async run() {
            this.app.listen(this.config.port, (err) => {
                if (err) {
                    console.log(err);
                    throw err;
                } else {
                    console.log(`Server is running Successfully on ${this.config.port}`);
                }
            });
        return this;
    }
}

export default Server ;
import * as dotenv from 'dotenv';
import * as express from 'express';
import {Application, Request, Response} from 'express';
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import 'dotenv/config';
import 'reflect-metadata'
import bodyParser = require('body-parser');
import { Route } from './models/Route';
import { GetRoutes } from './router';

createConnection().then(async connection => {
    dotenv.config();
    
    const app: express.Application = express();
    app.use(bodyParser.json());
    
    let routes: Route[] = await GetRoutes();

    routes.forEach(route => {
        app[route.method](route.path, (request: Request, response: Response, next: Function) => {
            route.beforeAction();
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });

    app.get('/', function(req: Request, res: Response){
        res.send(`Server running for port ${process.env.APPPORT}`);
    })

    //console.log(process.env);
    app.listen(process.env.APPPORT || 5001, () => 
        console.log(`Server running on port ${process.env.APPPORT}`)
    );
}).catch(error => console.log(error));


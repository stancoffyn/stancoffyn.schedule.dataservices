import { Request, Response } from 'express'

type RouteAction = (request: Request, response: Response) => any;
type RouteRepoInit = () => any;

export class Route {
    path: string;
    method: string;
    action: RouteAction;
    beforeAction: RouteRepoInit;

    constructor(path: string, method: string, action: RouteAction, beforeAction: RouteRepoInit){
        this.action = action;
        this.method = method;
        this.path = path;
        this.beforeAction = beforeAction;
    }
}
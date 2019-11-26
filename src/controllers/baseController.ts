import { Route } from '../models/Route';
export interface BaseController {
    getRoutes() : Route[];
}
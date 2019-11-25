import { Route } from "./models/Route";
import { UserController } from "./controllers/userController";

export async function GetRoutes() : Promise<Route[]> {
    let routes: Route[] = [];
    routes = routes.concat(new UserController().getRoutes());
    return routes;
}
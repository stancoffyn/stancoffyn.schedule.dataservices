import { Request, Response } from "express";
import { getManager, Repository } from "typeorm";
import { User } from "../entity/User";
import { BaseController } from './baseController'
import { Route } from "../models/Route";

export class UserController implements BaseController {
    repo : Repository<User> = getManager().getRepository(User);
    
    getRoutes() : Route[] {
        return [
            new Route('/user/', 'get', this.getAllUsers, this.setRepo),
            new Route('/user/', 'post', this.createUser, this.setRepo),
            new Route('/user/', 'put', this.updateUser, this.setRepo),
            new Route('/user/', 'delete', this.deleteUser, this.setRepo)
        ]
    }
    
    setRepo(){
        this.repo = getManager().getRepository(User);
    }

    async getAllUsers(request: Request, response: Response){
        let users = await this.repo.find();
        response.send(users);
    }

    async createUser(request: Request, response: Response){
        let newUser = this.repo.create(request.body);
        await this.repo.save(newUser);
        response.send(newUser);
    }

    async updateUser(request: Request, response: Response){
        let user = this.repo.create(request.body);
        await this.repo.save(user);
        response.send();
    }

    async deleteUser(request: Request, response: Response){
        await this.repo.remove(this.repo.create(request.body))
        response.send();
    }
}
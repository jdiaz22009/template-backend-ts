import { Request, Response, NextFunction } from "express";
import { services } from "./service";

class ControllerUsers {
  // constructor(){}
  public registerUser = (req: Request, res: Response, next: NextFunction) =>
    new Promise((resolve, reject) => {
      const { body } = req;
      services.register(body)
      .then(res =>{
        console.log(res,'response')
      })
      .catch(e =>{
        console.error(e,'error')
      })
    });
}

export const controller = new ControllerUsers()

import { decode, encode } from "jwt-simple";
import moment from "moment";
import { Request, Response, NextFunction } from "express";

class Middlewares {
  tokenSecret: string = process.env.TOKEN_SECRET || "D4TAP4R4L0G1N04UTH";

  constructor() {}

  createToken(user: any) {
    const payload = {
      sub: user._id,
      iat: moment().unix(),
      exp: moment()
        .add(14, "years")
        .unix()
    };
    return encode(payload, this.tokenSecret);
  }

  tokenAuthentication(req: Request, res: Response, next: NextFunction) {
    if (!req.headers.authorization) {
      return res.status(403).send({ message: "you are not logged in" });
    } else {
      var token = req.headers.authorization.replace(/[""]+/g, "");
      try {
        var payload = decode(token, this.tokenSecret);
        if (payload.exp <= moment().unix()) {
          return res.status(401).send({ message: "The token has expired" });
        }
      } catch (error) {
        return res.status(401).send({ message: "The token is not valid" });
      }
      console.log(payload, "payload");
      next();
    }
  }
}

export const middleware = new Middlewares();

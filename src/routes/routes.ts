import { Router, Request, Response } from "express";
import { connected } from "./connect";
import router from "./port_router";
//? init
var api = Router();

//? Routes
api.post("/:any*?", function(req: Request, res: Response) {
  var headers = {
    Authorization: req.headers.authorization
  };
  var data = req.body;
  var portos = req.originalUrl.split("/");
  var path = portos[3];
  console.log(data, 'data' , 'path', path, 'route', router[path] );
  connected("POST", req.originalUrl, router[path].port, data, headers)
    .then(function(response) {
      console.log("res", response);
      res.status(200).send(response);
    })
    .catch(function(error) {
      res.status(500).send(error);
    });
});

api.get("/:any*?", function(req: Request, res: Response) {
  var headers = {
    Authorization: req.headers.authorization
  };
  var portos = req.originalUrl.split("/");
  var path = portos[3];
  connected("GET", req.originalUrl, router[path].port, {}, headers)
    .then(function(response) {
      res.status(200).send(response);
    })
    .catch(function(error) {
      res.status(500).send(error);
    });
});

api.put("/:any*?", function(req: Request, res: Response) {
  var headers = {
    Authorization: req.headers.authorization
  };
  var portos = req.originalUrl.split("/");
  var path = portos[3];

  connected("PUT", req.originalUrl, router[path].port, req.body, headers)
    .then(function(response) {
      res.status(200).send(response);
    })
    .catch(function(error) {
      res.status(500).send(error);
    });
});

api.delete("/:any*?", function(req: Request, res: Response) {
  var headers = {
    Authorization: req.headers.authorization
  };
  var portos = req.originalUrl.split("/");
  var path = portos[3];
  connected("DELETE", req.originalUrl, router[path].port, {}, headers)
    .then(function(response) {
      res.status(200).send(response);
    })
    .catch(function(error) {
      res.status(500).send(error);
    });
});

export const routes = api;
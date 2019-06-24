import express from "express";
import expressFileUpload from "express-fileupload";
import morgan from "morgan";
import cors from "cors";
import { connect, connection } from "mongoose";
import router from "./routes";
import { json, urlencoded } from "body-parser";
import { db_auth } from "../../db/db_auth";

//? init
const app = express();

//? config
const dbUrl = db_auth.db.db;
const port = db_auth.server.port;

//? middlewares
app.use(json());
app.use(urlencoded({ extended: true }));

//? connected
connect(dbUrl, { useNewUrlParser: true, autoIndex: false, useCreateIndex: true });
connection.on('connected', () =>{
  console.log("Mongose connection is open", dbUrl)
  app.listen(port,function(){
    console.log(`[db] AUTH listen on port ${port}`)
});
})

connection.on('Disconnected', () => {
  console.log("Mongoose is disconnected")
});

process.on('SIGINT',() =>{
  connection.close(()=>{
      console.log("Mongoose connection is disconnected due to application termination");
      process.exit(0)
  });
});
app.use(morgan('dev'));
app.use(cors());
app.use(expressFileUpload());
app.use('/api',router);

export const aplications = app
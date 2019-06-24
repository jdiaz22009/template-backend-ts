import { Router } from 'express';
import { controller } from  './users/controller';
import { middleware } from '../../middlewares/middlewares';


//?init 
const api:Router = Router()

api.post('/v1/auth/register', controller.registerUser)




export default api

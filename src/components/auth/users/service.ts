import {userShcema, users } from '../model';

class ServicesUsers {

  constructor(){}

  public register(data:users){
    return new Promise((resolve,reject) =>{
      console.log(data,'data')
    })

  }
}

export const services = new ServicesUsers();
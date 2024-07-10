import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User{
  username?:string;
  avatar_url?:string;
  bio?:string;
  name?:string;
  location?:string;
  titles?:string[];
  ['favorite-language']?:string;
  ['total-stars']?:number;
  ['highest-starred']?:number;
  ['public-repos']?:number;
  ['perfect-repos']?:number;
  followers?:number;
  following?:number;
}

const inspectUserUrl = 'http://localhost:3000/api/user/';
const duelUsersUrl = 'http://localhost:3000/api/users?';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  inspectUser(username = 'andrew') {
   return this.http.get(inspectUserUrl+username);
    
  }

  async duelUsers(user1 = 'fabpot', user2 = 'andrew') {
    let data = await this.http.get(duelUsersUrl + `username=${user1}&username=${user2}`).toPromise();
    console.log(data);
    return data;
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  constructor(private http:HttpClient) { 

     }
     
     
     getUserInfo(user_id:number){
      return this.http.get<Users[]>(`http://localhost:3000/user_info/${user_id}`)
    }
}

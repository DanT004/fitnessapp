import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ilist } from '../interfaces/ilist';

@Injectable({
  providedIn: 'root'
})
export class ExerciseListService {

  constructor(private http:HttpClient) { }

  getList(user_id:number){
    return this.http.get<Ilist[]>(`http://localhost:3000/workout_list/${user_id}`);
  }

  getInfo(id:number){
    return this.http.get<Ilist[]>(`http://localhost:3000/list/${id}`);
  }

  createList(formData:any){
    return this.http.post(`http://localhost:3000/workout_list`, formData); 
  }

  deleteList(id:number){
    return this.http.delete(`http://localhost:3000/workout_list/${id}`); 
  }
}

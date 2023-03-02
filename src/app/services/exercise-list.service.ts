import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ilist } from '../interfaces/ilist';

@Injectable({
  providedIn: 'root'
})
export class ExerciseListService {

  constructor(private http:HttpClient) { }

  getList(){
    return this.http.get<Ilist[]>("http:..localhost:3000/todays_workout");
  }

  createList(listData:any){
    return this.http.post(`http://localhost:3000/todays_workout`, listData); 
  }

  deleteList(id:number){
    return this.http.delete(`http://localhost:3000/todays_workout/${id}`); 
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iexercise } from '../interfaces/iexercise';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  constructor(private http:HttpClient) { }

  getWarmup(exe_cat_id:1){
    return this.http.get<Iexercise[]>(`http://localhost:3000/exercises/${exe_cat_id}`);
  }

  getUpper(exe_cat_id:3){
    return this.http.get<Iexercise[]>(`http://localhost:3000/exercises/${exe_cat_id}`);
  }

  getLower(exe_cat_id:2){
    return this.http.get<Iexercise[]>(`http://localhost:3000/exercises/${exe_cat_id}`);
  }

}

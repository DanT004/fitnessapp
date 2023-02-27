import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iexercise } from '../interfaces/iexercise';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  constructor(private http:HttpClient,
    
    ) { }

  getExercise(exe_cat_id:number){
    return this.http.get<Iexercise[]>(`http://localhost:3000/exercises/${exe_cat_id}`);
  }

  getExeInfo(id:number){
    return this.http.get<Iexercise[]>(`http://localhost:3000/exercises/${id}`);
  }

  // getCurrentExe(){
  //   return JSON.parse(localStorage.getItem('currentExe')!);
  // }

}

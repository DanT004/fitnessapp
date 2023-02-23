import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iexercise } from '../interfaces/iexercise';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  constructor(private http:HttpClient) { }

  getExercise(){
    return this.http.get<Iexercise[]>('http://localhost:3000/exercises');
  }

}

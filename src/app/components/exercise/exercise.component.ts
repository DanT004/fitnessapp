import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Iexercise } from 'src/app/interfaces/iexercise';

@Component({
  standalone:true,
  imports:[IonicModule],
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {

  @Input() exercise!: Iexercise;

  constructor() { }

  ngOnInit() {}

}

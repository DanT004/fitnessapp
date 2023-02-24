import { Component, Input, OnInit } from '@angular/core';
import { Iexercise } from 'src/app/interfaces/iexercise';

@Component({
  selector: 'app-exercisepage',
  templateUrl: './exercisepage.component.html',
  styleUrls: ['./exercisepage.component.scss'],
})
export class ExercisepageComponent implements OnInit {

  @Input() exercise!:Iexercise

  constructor() { }

  ngOnInit() {}

}

import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Iexercise } from 'src/app/interfaces/iexercise';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports:[IonicModule],
  selector: 'app-exercisepage',
  templateUrl: './exercisepage.component.html',
  styleUrls: ['./exercisepage.component.scss'],
})
export class ExercisepageComponent implements OnInit {

  vidUrl!: SafeResourceUrl;

  @Input() exercise!:Iexercise

  constructor(private domSanitizer:DomSanitizer) { 

  }

  ngOnInit() {
    this.vidUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.exercise.video);
  }

}

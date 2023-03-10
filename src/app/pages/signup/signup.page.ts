import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupForm;
  selectedImage:any;

  constructor(private service:UsersService, 
    private formBuilder: FormBuilder,
    private router: Router,
    private loadingController:LoadingController,
    private alertController:AlertController) 
    {
    this.signupForm = formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      contact: [,[Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
   }

  ngOnInit(): void {
  }

  selectFile(event: any): void {
    this.selectedImage = event.target.files[0];
    console.log(this.selectedImage);
  }

  async signup(){
    const loading = await this.loadingController.create();
    await loading.present();

    let formData:any = this.signupForm.value;
    let fd = new FormData();
    fd.append('img', this.selectedImage);

    for(let key in formData){
      fd.append(key, formData[key]);
    }

    this.service.signup(fd).subscribe({
      next: async (result) => {
      this.loadingController.dismiss();
      this.router.navigateByUrl('/login', {replaceUrl: true});
      const alert = this.alertController.create({
          header: 'Sign Up Successful!',
          message: 'Thank You for Signing up!',
          buttons: ['OK']
        });
        (await alert).present();
    }, error: async error => {
      loading.dismiss();
        const alert = this.alertController.create({
          header: 'Sign Up Failed',
          message: 'Please fill Up the Form',
          buttons: ['OK']
        });
        (await alert).present();
        console.error(error);
    }
    });
  }

  login(){
    this.router.navigateByUrl('/login', {replaceUrl: true});
  }


  get emailFormControl(){
    return this.signupForm.get('email');
  }
  
  get passwordFormControl(){
    return this.signupForm.get('password');
  }
  get first_nameFormControl(){
    return this.signupForm.get('first_name');
  }
  
  get last_nameFormControl(){
    return this.signupForm.get('last_name');
  }

  get contactFormControl(){
    return this.signupForm.get('contact');
  }

}

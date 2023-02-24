import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm;

  constructor(private service: UsersService,
     private formBuilder: FormBuilder, 
     private toastController: ToastController, 
     private loadingController: LoadingController, 
     private router: Router, 
     private alertController: AlertController) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  ngOnInit(): void {
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    let formData = this.loginForm.value;
    this.service.login(formData).subscribe({
      next: (result) => {
        localStorage.setItem('currentUser', JSON.stringify(result));
        this.loadingController.dismiss();
        this.router.navigateByUrl('/tabs', { replaceUrl: true })
      }, error: async error => {
        loading.dismiss();
        const alert = this.alertController.create({
          header: 'Login failed',
          message: error.error,
          buttons: ['OK']
        });
        (await alert).present();
        console.error(error);
      }
    });
  }

  get emailFormControl() {
    return this.loginForm.get('email');
  }

  get passwordFormControl() {
    return this.loginForm.get('password');
  }


}

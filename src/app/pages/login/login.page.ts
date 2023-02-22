import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentials!: FormGroup;

  constructor(private fb: FormBuilder,
		private authService: AuthenticationService,
		private alertController: AlertController,
		private router: Router,
		private loadingController: LoadingController) { 
    
    }

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['eve.holt@reqres.in', [Validators.required, Validators.email]],
      password: ['testingjohn', [Validators.required, Validators.minLength(6)]]
    });
  }


  
  async login() {
		const loading = await this.loadingController.create();
		await loading.present();

		this.authService.login(this.credentials.value).subscribe({
			next: (_res) => {
				loading.dismiss();
				this.router.navigateByUrl('/tabs', { replaceUrl: true });
			},
			error: async (res) => {
				loading.dismiss();
				const alert = this.alertController.create({
					header: 'Login failed',
					message: res.error.error,
					buttons: ['OK']
				});

				(await alert).present();
			}
  });
	}

  get email() {
		return this.credentials.get('email');
	}

	get password() {
		return this.credentials.get('password');
	}

}

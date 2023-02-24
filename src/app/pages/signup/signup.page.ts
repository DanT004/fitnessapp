import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupForm;

  constructor(private service:UsersService, private formBuilder: FormBuilder) {
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

  signup(){
    let formData = this.signupForm.value;
    this.service.signup(formData).subscribe({
      next: (result) => {
      alert('Register successful!');
    }, error: error => {
      alert('Register failed!');
      console.error(error);
    }
    });
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

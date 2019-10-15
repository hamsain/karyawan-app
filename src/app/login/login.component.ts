import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from "@angular/router"

const users= [
  {email:"admin@email.com",password:"12345678"},
  {email:"user@email.com",password:"1234qwer"}
];

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  invalid = false;

  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get f() {return this.loginForm.controls}

  submit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      console.log('error');
      return;
    }
    let isEmail = users.find(({ email }) => email === this.loginForm.value.email);
    let isPassword = users.find(({ password }) => password === this.loginForm.value.password);
    if(isEmail && isPassword){
      this.invalid =false;
      this.gotoEmployee();
    }else{
      this.invalid = true;
      let message = "username or password is invalid";
      let action = "close";
      this.errorNotif(message, action);
    }
    
  }

  errorNotif(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

  gotoEmployee(){
    this.router.navigate(['/employees']);
  }


}

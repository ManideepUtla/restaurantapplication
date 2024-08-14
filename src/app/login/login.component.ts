import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['',[ Validators.required, Validators.minLength(7)]],
      password: ['', [Validators.required,Validators.minLength(8),this.passwordValidator]]
    });
  }

  register() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }

  creataccount() {
    this.router.navigate(['/creataccount']);

  }

  login(){
    this.router.navigate(['/home'])
  }

  passwordValidator(control: any): { [key: string]: boolean } | null {
    const value = control.value;
    const hasNumber = /[0-9]/.test(value);
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    if (!hasNumber || !hasUpperCase || !hasLowerCase || !hasSpecialCharacter) {
      return { 'passwordStrength': true };
    }
    return null;
  }



}

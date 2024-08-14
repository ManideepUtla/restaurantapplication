import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creataccount',
  templateUrl: './creataccount.component.html',
  styleUrl: './creataccount.component.css'
})
export class CreataccountComponent implements OnInit {

  createForm !: FormGroup;

  constructor(private fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      name: ['', Validators.required, Validators.minLength(5)],
      mobileNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Assuming 10 digit mobile number
      userName: ['',[ Validators.required, Validators.minLength(7)]],
      password: ['', [Validators.required,Validators.minLength(8),this.passwordValidator]]
    });
  }

  register() {if (this.createForm.valid) {
    console.log(this.createForm.value);
    // Handle your submission logic here
  } else {
    this.createForm.markAllAsTouched(); // This will trigger validation messages for all fields
  }
  }

  login() {
    this.router.navigate(['/login'])
    
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


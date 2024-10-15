import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';  // Import NgIf

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ReactiveFormsModule, NgIf]  // Add NgIf to the imports array
})
export class AppComponent {
  loginForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      const loginData = {
        Username: this.loginForm.get('username')?.value,
        Password: this.loginForm.get('password')?.value
      };
      console.log('Login Data', loginData);
    }
  }

  // For easier access in the template
  get f() {
    return this.loginForm.controls;
  }
}
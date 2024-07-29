import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../Models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = { username: '', password: '', role: '' };
  loginForm: FormGroup = this.fb.group({});

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [this.user.username, [Validators.required, Validators.minLength(3)]],
      password: [this.user.password, [Validators.required, Validators.minLength(6)]]
    });
  }
  
  login(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe(success => {
        if (success) {
          console.log('Login successful', this.loginForm.value);
          this.router.navigate(['/person']); // Navigate to the dashboard or another route
        } else {
          alert('Login failed');
          console.error('Login failed');
        }
      });
    }
  }
}

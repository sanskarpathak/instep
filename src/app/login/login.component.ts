import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username!: string;
  password!: string;
  isMentor: boolean = false;

  constructor(private router: Router) {}

  login() {
    // Perform authentication logic here
    // For simplicity, let's assume successful login
    if (this.username === 'student' && this.password === 'password') {
      if (!this.isMentor) this.router.navigate(['/student-dashboard']);
    } else if (this.username === 'mentor' && this.password === 'password') {
      if (this.isMentor) this.router.navigate(['/mentor-dashboard']);
    } else {
      alert('Invalid username or password');
    }
  }
}

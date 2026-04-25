import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Services/auth';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html'
})
export class Login {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    const result = this.auth.login(this.email, this.password);
    if (result.success) {
      this.router.navigate(['/']);
    } else {
      alert(result.message);
    }
  }
}
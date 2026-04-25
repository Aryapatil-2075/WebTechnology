import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Services/auth';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html'
})
export class Register {
  email = '';
  password = '';
  role = 'employee';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    if (!this.email || !this.password) {
      alert('Please fill in all fields');
      return;
    }
    const result = this.auth.register(this.email, this.password, this.role);
    if (result.success) {
      alert(result.message);
      this.router.navigate(['/login']);
    } else {
      alert(result.message);
    }
  }
}
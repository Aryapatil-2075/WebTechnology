import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../Services/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.html'
})
export class App {
  constructor(private auth: AuthService, private router: Router) {}

  getUser() { return this.auth.getUser(); }
  isAdmin() { return this.auth.isAdmin(); }
  isEmployee() { return this.auth.isEmployee(); }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}

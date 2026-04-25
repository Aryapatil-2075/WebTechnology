import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../Services/auth';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: any): boolean {
    const user = this.auth.getUser();

    // Not logged in
    if (!user) {
      this.router.navigate(['/login']);
      return false;
    }

    // Check if route requires specific role
    const requiredRole = route.data?.['role'];
    
    if (requiredRole && !this.auth.hasRole(requiredRole)) {
      alert('Access Denied! You do not have permission to access this page.');
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}

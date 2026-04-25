import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  users: any[] = JSON.parse(localStorage.getItem('users') || '[]');

  hasRole(requiredRole: string): boolean {
    const user = this.getUser();
    return user?.role === requiredRole;
  }

  register(email: string, password: string, role: string) {
    if (this.users.find(u => u.email === email)) {
      return { success: false, message: 'User already exists' };
    }
    this.users.push({ id: Date.now(), email, password, role });
    localStorage.setItem('users', JSON.stringify(this.users));
    return { success: true, message: 'Registration successful' };
  }

  login(email: string, password: string) {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return { success: true, message: 'Login successful' };
    }
    return { success: false, message: 'Invalid credentials' };
  }

  getUser() {
    return JSON.parse(localStorage.getItem('currentUser') || 'null');
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  isAdmin() {
    return this.getUser()?.role === 'admin';
  }

  isEmployee() {
    return this.getUser()?.role === 'employee';
  }
}
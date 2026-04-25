import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveService } from '../../Services/leave';
import { AuthService } from '../../Services/auth';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-leaves.html'
})
export class ManageLeaves implements OnInit {
  leaves: any[] = [];

  constructor(private leave: LeaveService, private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.leaves = this.leave.getAll();
  }

  approve(id: number) {
    const result = this.leave.approve(id);
    alert(result.message);
    if (result.success) {
      this.leaves = this.leave.getAll();
    }
  }

  reject(id: number) {
    const result = this.leave.reject(id);
    alert(result.message);
    if (result.success) {
      this.leaves = this.leave.getAll();
    }
  }
}

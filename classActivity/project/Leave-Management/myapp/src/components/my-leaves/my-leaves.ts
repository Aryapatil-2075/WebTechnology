import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveService } from '../../Services/leave';
import { AuthService } from '../../Services/auth';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-leaves.html'
})
export class MyLeaves implements OnInit {
  leaves: any[] = [];

  constructor(private leave: LeaveService, private auth: AuthService) {}

  ngOnInit() {
    const user = this.auth.getUser();
    if (user) {
      this.leaves = this.leave.getByUser(user.id);
    }
  }
}
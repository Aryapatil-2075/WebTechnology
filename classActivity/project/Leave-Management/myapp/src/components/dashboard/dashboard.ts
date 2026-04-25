import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveService } from '../../Services/leave';
import { AuthService } from '../../Services/auth';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html'
})
export class Dashboard implements OnInit {
  user: any = null;
  stats: any = { total: 0, pending: 0, approved: 0, rejected: 0 };

  constructor(private leave: LeaveService, private auth: AuthService) {}

  ngOnInit() {
    this.user = this.auth.getUser();
    if (!this.user) return;

    const leaves = this.leave.getByUser(this.user.id);
    this.stats.total = leaves.length;
    this.stats.pending = leaves.filter(l => l.status === 'Pending').length;
    this.stats.approved = leaves.filter(l => l.status === 'Approved').length;
    this.stats.rejected = leaves.filter(l => l.status === 'Rejected').length;
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LeaveService } from '../../Services/leave';
import { AuthService } from '../../Services/auth';

@Component({
  standalone: true,
  imports: [FormsModule],
  templateUrl: './apply-leave.html'
})
export class ApplyLeave {
  reason = '';
  fromDate = '';
  toDate = '';

  constructor(private leave: LeaveService, private auth: AuthService) {}

  apply() {
    const user = this.auth.getUser();
    if (!user) {
      alert('Please login first');
      return;
    }

    const result = this.leave.apply({ userId: user.id, reason: this.reason, fromDate: this.fromDate, toDate: this.toDate });
    if (result.success) {
      alert(result.message);
      this.reason = '';
      this.fromDate = '';
      this.toDate = '';
    } else {
      alert(result.message);
    }
  }
}
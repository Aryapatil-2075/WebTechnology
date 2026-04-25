import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LeaveService {
  leaves: any[] = JSON.parse(localStorage.getItem('leaves') || '[]');

  apply(leave: any) {
    leave.id = Date.now();
    leave.status = 'Pending';
    this.leaves.push(leave);
    localStorage.setItem('leaves', JSON.stringify(this.leaves));
    return { success: true, message: 'Leave applied successfully' };
  }

  getAll() {
    return this.leaves;
  }

  getByUser(userId: number) {
    return this.leaves.filter(l => l.userId === userId);
  }

  approve(id: number) {
    const leave = this.leaves.find(l => l.id === id);
    if (leave) {
      leave.status = 'Approved';
      localStorage.setItem('leaves', JSON.stringify(this.leaves));
      return { success: true, message: 'Leave approved' };
    }
    return { success: false, message: 'Leave not found' };
  }

  reject(id: number) {
    const leave = this.leaves.find(l => l.id === id);
    if (leave) {
      leave.status = 'Rejected';
      localStorage.setItem('leaves', JSON.stringify(this.leaves));
      return { success: true, message: 'Leave rejected' };
    }
    return { success: false, message: 'Leave not found' };
  }
}

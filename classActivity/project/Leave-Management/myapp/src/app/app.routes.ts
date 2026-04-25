import { Routes } from '@angular/router';
import { Login } from '../components/login/login';
import { Register } from '../components/register/register';
import { Dashboard } from '../components/dashboard/dashboard';
import { ApplyLeave } from '../components/apply-leave/apply-leave';
import { MyLeaves } from '../components/my-leaves/my-leaves';
import { ManageLeaves } from '../components/manage-leaves/manage-leaves';
import { RoleGuard } from '../Guards/role.guard';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'apply', component: ApplyLeave, canActivate: [RoleGuard], data: { role: 'employee' } },
  { path: 'my', component: MyLeaves, canActivate: [RoleGuard], data: { role: 'employee' } },
  { path: 'manage', component: ManageLeaves, canActivate: [RoleGuard], data: { role: 'admin' } }
];

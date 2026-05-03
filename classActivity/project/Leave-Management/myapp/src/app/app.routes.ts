import { Routes } from '@angular/router';
import { Login } from '../components/login/login';
import { Register } from '../components/register/register';
import { Dashboard } from '../components/dashboard/dashboard';
import { ApplyLeave } from '../components/apply-leave/apply-leave';
import { MyLeaves } from '../components/my-leaves/my-leaves';
import { ManageLeaves } from '../components/manage-leaves/manage-leaves';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'apply', component: ApplyLeave },
  { path: 'my', component: MyLeaves },
  { path: 'manage', component: ManageLeaves }
];

import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: '', loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent), canActivate: [AuthGuard]
  },
  {
    path: 'chat/:id', loadComponent: () =>
      import('./components/chat/chat.component').then((m) => m.ChatComponent), canActivate: [AuthGuard]
  },
  {
    path: 'login', loadComponent: () =>
      import('./components/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'register', loadComponent: () =>
      import('./components/register/register.component').then((m) => m.RegisterComponent),
  },
  {
    path: 'navigation', loadComponent: () =>
      import('./components/navigation/navigation.component').then((m) => m.NavigationComponent), canActivate: [AuthGuard]
  },
];

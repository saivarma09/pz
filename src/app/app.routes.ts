import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'new-patients',
    loadComponent: () => import('./home/new-patients/new-patients.page').then((m) => m.NewPatientsPage),
  },
  {
    path: 'follow-up-tests',
    loadComponent: () => import('./home/follow-up-tests/follow-up-tests.page').then((m) => m.FollowUpTestsPage),
  },
  {
    path: 'follow-up-test-results',
    loadComponent: () => import('./home/follow-up-test-results/follow-up-test-results.page').then((m) => m.FollowUpTestResultsPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

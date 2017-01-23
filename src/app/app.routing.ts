import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewPostingComponent } from './new-posting/new-posting.component';

const appRoutes: Routes = [
  {
    path: 'new-posting',
    component: NewPostingComponent
  },
  {
    path: '',
    component: WelcomeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

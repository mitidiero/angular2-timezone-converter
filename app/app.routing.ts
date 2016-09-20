import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConverterComponent } from './converter.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/converter',
    pathMatch: 'full'
  },
  {
    path: 'converter',
    component: ConverterComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

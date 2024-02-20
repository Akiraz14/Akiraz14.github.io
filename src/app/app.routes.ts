import { Routes } from '@angular/router';
import { MainLayoutComponent } from '@core/layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
  }
  // {
  //   path: '',
  //   component: MainLayoutComponent,
  //   loadChildren: () => import('@core/layouts/main-layout/main-layout.routes').then(r => r.MAIN_LAYOUT_ROUTES),
  // },
  // {
  //   path: '**', redirectTo: ''
  // }
];

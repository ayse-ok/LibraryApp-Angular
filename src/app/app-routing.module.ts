import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  // {
  //   path: 'library',
  //   loadChildren: () => import('./main/main.module').then((m) => m.MainModule)
  // },
  {
    path: '',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule)
  },

  {
    path: '',
    component: MainComponent,// <= Page component registration,
    data: { title: 'Ana Sayfa' },
    children: [{
      path: 'library',      
      component: MainComponent
    }]     
  },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

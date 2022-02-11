import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { MainComponent } from './main.component';
import { AuthGuard } from '@auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    data: { title: 'Ana Sayfa' },
    component: MainComponent // <= Page component registration
  },
  {
    path: 'dashboard',
    component: MainComponent,// <= Page component registration,
    data: { title: 'Ana Sayfa' },
    children: [{
      path: '',      
      component: DashboardComponent
    }]     
  },
  {
    path: 'profile',
    component: MainComponent,// <= Page component registration,
    data: { title: 'Profil' },
    children: [{
      path: '',      
      component: ProfileComponent
    }]     
  },
  {
    path: 'kutuphane',
    data: { title: 'Kütüphane' },
    loadChildren: () => import('../kutuphane/kutuphane.module').then((m) => m.KutuphaneModule), 
  },
  {
    path: 'ziyaretci',
    data: { title: 'Ziyaretçi' },
    loadChildren: () => import('../ziyaretci/ziyaretci.module').then((m) => m.ZiyaretciModule), 
  },
  {
    path: 'ziyaretciIslemleri',
    data: { title: 'Ziyaretçi İşlemler' },   
    loadChildren: () => import('../ziyaretci-islemler/ziyaretci-islemler.module').then((m) => m.ZiyaretciIslemlerModule), 
  },
  {path: 'cikis', redirectTo: '/logout' , pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

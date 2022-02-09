import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  // {
  //   path: 'dashboard',
  //   component: MainComponent,// <= Page component registration,
  //   data: { title: 'Ana Sayfa' },
  //   children: [{
  //     path: '',      
  //     component: DashboardComponent
  //   }]     
  // },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path: 'kutuphane',
    data: { title: 'Kütüphane' },
    component: MainComponent,// <= Page component registration
    loadChildren: () => import('../kutuphane/kutuphane.module').then((m) => m.KutuphaneModule), 
  },
  {
    path: 'ziyaretci',
    data: { title: 'Ziyaretçi' },
    component: MainComponent,// <= Page component registration
    loadChildren: () => import('../ziyaretci/ziyaretci.module').then((m) => m.ZiyaretciModule), 
  },
  {
    path: 'ziyaretci-islemler',
    data: { title: 'Ziyaretçi İşlemler' },
    component: MainComponent,// <= Page component registration
    loadChildren: () => import('../ziyaretci-islemler/ziyaretci-islemler.module').then((m) => m.ZiyaretciIslemlerModule), 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../main/dashboard/dashboard.component';
import { MainComponent } from '../main/main.component';
import { IadeEtmeComponent } from './iade-etme/iade-etme.component';
import { OduncAlmaComponent } from './odunc-alma/odunc-alma.component';

const routes: Routes = [
  {
    path: 'ziyaretci-islemler',
    data: { title: 'Ziyaretçi İşlemler' },
    children: [
      {
        path: 'iade-etme',
        data: { title: 'İade Etme' },
        component: IadeEtmeComponent        
      },
      {
        path: 'odunc-alma',
        data: { title: 'Ödünç Alma' },
        component: OduncAlmaComponent        
      },
    ]
  },
  {
    path: '',
    data: { title: 'Ana Sayfa' },
    component: MainComponent // <= Page component registration
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZiyaretciIslemlerRoutingModule { }

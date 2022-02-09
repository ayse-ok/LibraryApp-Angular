import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../main/dashboard/dashboard.component';
import { MainComponent } from '../main/main.component';
import { IadeEtmeComponent } from './iade-etme/iade-etme.component';
import { OduncAlmaComponent } from './odunc-alma/odunc-alma.component';

const routes: Routes = [
  {
    path: '',
    data: { title: 'Ziyaretçi İşlemler' },
    component: MainComponent,
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
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZiyaretciIslemlerRoutingModule { }

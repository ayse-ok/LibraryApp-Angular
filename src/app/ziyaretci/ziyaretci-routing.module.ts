import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../main/dashboard/dashboard.component';
import { MainComponent } from '../main/main.component';
import { DetayliAramaComponent } from './detayli-arama/detayli-arama.component';
import { HesabimComponent } from './hesabim/hesabim.component';

const routes: Routes = [
  {
    path: 'ziyaretci',
    data: { title: 'Ziyaretçi' },
    children: [
      {
        path: 'detayli-arama',
        data: { title: 'Detaylı arama' },
        component: DetayliAramaComponent        
      },
      {
        path: 'hesabim',
        data: { title: 'Hesabim' },
        component: HesabimComponent        
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
export class ZiyaretciRoutingModule { }

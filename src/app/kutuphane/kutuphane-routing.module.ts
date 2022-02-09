import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { EnvanterComponent } from './envanter/envanter.component';
import { KategoriComponent } from './kategori/kategori.component';
import { KitapComponent } from './kitap/kitap.component';

const routes: Routes = [
  {
    path: '',
    data: { title: 'Kütüphane' },
    component: MainComponent,
    children: [
      {
        path: 'kitap',
        data: { title: 'Kitap Ekle' },
        component: KitapComponent        
      },
      {
        path: 'kategori',
        data: { title: 'Kategori Ekle' },
        component: KategoriComponent        
      },
      {
        path: 'envanter',
        data: { title: 'Envanter Ekle' },
        component: EnvanterComponent        
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KutuphaneRoutingModule { }

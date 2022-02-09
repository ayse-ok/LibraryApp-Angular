import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuList: MenuItem[]=[];
  altMenuList: MenuItem[]=[];
  profilMenuItems: MenuItem[]=[];

  constructor() { }

  ngOnInit(): void {
    this.menuDoldur();
    this.profilMenuDoldur();
  }

  profilMenuDoldur() {
    this.profilMenuItems.push({'label':'Profil', 'icon':'pi pi-user' , 'routerLink':'/profile'});
    this.profilMenuItems.push({'label':'Çıkış', 'icon':'pi pi-sign-out' ,'routerLink':'/logout'});
  }

  menuDoldur(){
    //Dashboard
    this.menuList.push({'label':'Ana Sayfa' , 'routerLink': '/dashboard'});

    //Kutuphane menusu
    this.altMenuList.push({'label':'Kategori Ekle', 'routerLink':'/kutuphane/kategori' });
    this.altMenuList.push({'label':'Kitap Ekle', 'routerLink':'/kutuphane/kitap' });
    this.altMenuList.push({'label':'Envanter Listesi', 'routerLink':'/kutuphane/envanter' });
    this.menuList.push({'label':'Kütüphane', 'routerLink':'/kutuphane' , 'items':this.altMenuList});
    this.altMenuList=[];

    // ziyaretci islemleri menusu
    this.altMenuList.push({'label':'Ödünç Alma', 'routerLink':'/ziyaretciIslemleri/odunc-alma' });
    this.altMenuList.push({'label':'İade etme', 'routerLink':'/ziyaretciIslemleri/iade-etme' });
    this.menuList.push({'label':'Ziyaretçi İşlemleri', 'routerLink':'/ziyaretciIslemleri' , 'items': this.altMenuList});
    this.altMenuList=[];

    //ziyaretci menüsü
    this.altMenuList.push({'label':'Detaylı Arama', 'routerLink':'/ziyaretci/detayli-arama' });
    this.altMenuList.push({'label':'Hesabım', 'routerLink':'/ziyaretci/hesabim' });
    this.menuList.push({'label':'Ziyaretçi', 'routerLink':'/ziyaretci' , 'items': this.altMenuList});
    this.altMenuList=[];
  }

}

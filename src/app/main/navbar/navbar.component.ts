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
    this.altMenuList.push({'label':'Kategori Ekle', 'routerLink':'/kategori' });
    this.altMenuList.push({'label':'Kitap Ekle', 'routerLink':'/kitap' });
    this.altMenuList.push({'label':'Envanter Listesi', 'routerLink':'/envanter' });
    this.menuList.push({'label':'Kütüphane', 'routerLink':'/kutuphane' , 'items':this.altMenuList});
    this.altMenuList=[];

    // ziyaretci islemleri menusu
    this.altMenuList.push({'label':'Ödünç Alma', 'routerLink':'/odunc-alma' });
    this.altMenuList.push({'label':'İade etme', 'routerLink':'/iade-etme' });
    this.menuList.push({'label':'Ziyaretçi İşlemleri', 'routerLink':'/ziyaretci-islemleri' , 'items': this.altMenuList});
    this.altMenuList=[];

    //ziyaretci menüsü
    this.altMenuList.push({'label':'Detaylı Arama', 'routerLink':'/detayli-arama' });
    this.altMenuList.push({'label':'Hesabım', 'routerLink':'/hesabim' });
    this.menuList.push({'label':'Ziyaretçi', 'routerLink':'/ziyaretci' , 'items': this.altMenuList});
    this.altMenuList=[];
  }

}

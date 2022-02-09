import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {MenuItem} from 'primeng/api';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  items: MenuItem[] = [];
  home: MenuItem = {}; 
  event: any;

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute) { 
    }

  ngOnInit(): void {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => this.items = this.createBreadcrumbs(this.activatedRoute.root));
    this.home = {icon: 'pi pi-home', routerLink: '/dashboard' };
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '', items: MenuItem[] = []): any{
    const children: ActivatedRoute[] = route.children; 

    if (children.length == 0 || children == null) {
      this.items.forEach(item=>{       
      })
      return items;      
    }else{
      for (const child of children) {
        const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
        const label: string = child.snapshot.data['title']; 
        
        if (routeURL !== '' && routeURL != null) {
          url += `/${routeURL}`;      
          if (label != 'undefined' && label != '' && label != null) {
            items.push({'label':label, 'routerLink':null});  //url                           
          }  
        }        
        return this.createBreadcrumbs(child, url, items);
      }
    }
  }

}

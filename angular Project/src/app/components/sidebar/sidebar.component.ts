import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Planning', icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/icons', title: 'Mobile_Store',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/maps', title: 'Fixed_Store', icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/user-profile', title: 'Affect Procduct & store',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/tables', title: 'Product',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}

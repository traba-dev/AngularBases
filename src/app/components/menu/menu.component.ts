import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // Rutas dinamicas

  public routes;

  constructor() { }

  ngOnInit() {
    this. routes = [
      {
        name: 'Home',
        path: '/home'
      },
      {
        name: 'About',
        path: '/about'
      },
      {
        name: 'Contact',
        path: '/contact'
      },
    ];
  }

}

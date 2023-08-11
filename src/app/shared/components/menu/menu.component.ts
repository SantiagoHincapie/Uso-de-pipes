import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  menuItems!: MenuItem[];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Pipes de angular',
        icon: 'pi pi-desktop',
        items:
        [
          {
            label:'Textos y Fechas',
            icon:'pi pi-align-left',
            routerLink:'**'
          },
          {
            label:'Numeros',
            icon:'pi pi-dollar',
            routerLink:'numbers'
          },
          {
            label:'No comunes',
            icon:'pi pi-globe',
            routerLink:'uncommon'
          }
        ]
      },
      {
        label:'Pipes personalizados',
        icon:'pi pi-cog',
        items:
        [
          {
            label:'Otro elemento',
            icon:'pi pi-cog'
          }
        ]
      }
    ];
  }
}
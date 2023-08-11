import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';

@NgModule({
  exports: [MenubarModule, CardModule, FieldsetModule,PanelModule],
  
})
export class PrimeNGModule {}

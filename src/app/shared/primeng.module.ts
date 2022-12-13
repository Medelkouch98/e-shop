import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';

const modules = [
  ButtonModule,
  OverlayPanelModule,
  InputTextModule,
  DividerModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class PrimeNgModule {}

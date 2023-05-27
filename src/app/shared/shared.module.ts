import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { PrimeNgModule } from './primeng.module';
import { DateAgoPipe, EnumeratePipe, LocalDateStringPipe } from './pipes';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

const declarations = [
  CartComponent,
  EnumeratePipe,
  LocalDateStringPipe,
  DateAgoPipe,
];

const imports = [CommonModule, PrimeNgModule, NzButtonModule, NzIconModule];

@NgModule({
  imports: [imports],
  exports: [declarations, imports],
  declarations: [declarations],
})
export class SharedModule {}

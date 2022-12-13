import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { PrimeNgModule } from './primeng.module';

@NgModule({
  imports: [CommonModule, PrimeNgModule],
  exports: [CartComponent, PrimeNgModule],
  declarations: [CartComponent],
})
export class SharedModule {}

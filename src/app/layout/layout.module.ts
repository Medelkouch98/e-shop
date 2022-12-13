import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';
import { SplitButtonModule } from 'primeng/splitbutton';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SplitButtonModule],
  declarations: [HeaderComponent, LayoutComponent],
})
export class LayoutModule {}

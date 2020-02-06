import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { MenuComponent } from './menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    MenubarModule
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent]
})
export class MenuModule {}

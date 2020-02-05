import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home.component';
import {PanelModule} from 'primeng/panel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PanelModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {}

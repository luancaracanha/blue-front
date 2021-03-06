import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './view/home.component';
import {PanelModule} from 'primeng/panel';
import {RouterModule} from '@angular/router';
import {HomeRoutingModule} from './home.routing';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    PanelModule,
    CardModule,
    ButtonModule,
    DialogModule,
    InputTextModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule {}

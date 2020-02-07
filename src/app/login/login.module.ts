import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './view/login.component';
import {PanelModule} from 'primeng/panel';
import {RouterModule} from '@angular/router';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    PanelModule,
    CardModule,
    ButtonModule,
    DialogModule,
    InputTextModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule {}

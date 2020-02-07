import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { MenuComponent } from './menu.component';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {LoginModule} from '../login/login.module';
import {CadastroModule} from '../cadastro/cadastro.module';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    MenubarModule,
    ToastModule,
    LoginModule,
    CadastroModule
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent],
  providers: [MessageService]
})
export class MenuModule {}

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {PanelModule} from 'primeng/panel';
import { VotosComponent } from './votos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PanelModule
  ],
  declarations: [
    VotosComponent
  ],
  exports: [
    VotosComponent
  ]
})
export class VotosModule {}

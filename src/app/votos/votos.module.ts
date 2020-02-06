import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {PanelModule} from 'primeng/panel';
import { VotosComponent } from './votos.component';
import { RouterModule } from '@angular/router';
import { VotosRoutingModule } from './votos.routing';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    VotosRoutingModule,
    PanelModule
  ],
  declarations: [VotosComponent],
  exports: [VotosComponent]
})
export class VotosModule {}

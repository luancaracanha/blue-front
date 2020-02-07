import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {PanelModule} from 'primeng/panel';
import { VotosComponent } from './view/votos.component';
import { RouterModule } from '@angular/router';
import { VotosRoutingModule } from './votos.routing';
import {ChartModule} from 'primeng/chart';
import {RelatorioComponent} from './relatorio/relatorio.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    VotosRoutingModule,
    PanelModule,
    ChartModule
  ],
  declarations: [VotosComponent, RelatorioComponent],
  exports: [VotosComponent, RelatorioComponent]
})
export class VotosModule {}

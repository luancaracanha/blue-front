import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VotosComponent } from './view/votos.component';
import {RelatorioComponent} from './relatorio/relatorio.component';

const routes: Routes = [
  { path: '', component: VotosComponent },
  { path: 'relatorio', component: RelatorioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VotosRoutingModule { }

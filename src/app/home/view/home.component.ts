import {Component, OnInit} from '@angular/core';
import { EmpreendimentoService } from '../service/empreendimento.service';
import { Empreendimento } from '../model/Empreendimento.model';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  empreendimentos: Empreendimento[]=[];

  constructor(
    private empreendimentoService: EmpreendimentoService
  ) {}

  ngOnInit() {
    this.empreendimentoService.todosEmpreendimentos().then(
      value => {
        console.log(value);
        this.empreendimentos = value
      },
      error => {
        console.log(error);
      }
    );
  }

  votar(empreendimento: Empreendimento) {
    console.log(empreendimento);
  }

}

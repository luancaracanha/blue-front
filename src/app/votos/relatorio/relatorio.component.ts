import {Component, OnInit} from '@angular/core';
import {VotosService} from '../service/votos.service';
import {log} from 'util';
import {GraficoDto} from '../model/GraficoDto';
import {Votacao} from '../model/Votacao.model';

@Component({
  selector: 'app-votos',
  styleUrls: ['./relatorio.component.scss'],
  templateUrl: './relatorio.component.html'
})
export class RelatorioComponent implements OnInit {

  data: any;
  options: any;
  votacoes: Votacao[] = [];

  constructor(
    private votosService: VotosService
  ) {

  }

  ngOnInit(): void {
    this.votosService.consultarVotacaoGrafico().then(
      value => {
        this.montarGrafico(value);
      },
      error => {
        console.log(error);
      }
    );

    this.votosService.consultarVotacaoTodos().then(
      value => {
        this.votacoes = value;
      },
      error => {
        console.log(error);
      }
    );
  }

  montarGrafico(graficoDto: GraficoDto[]) {
    this.data = {
      labels: [
        graficoDto[0].nomeEempreendimento,
        graficoDto[1].nomeEempreendimento,
        graficoDto[2].nomeEempreendimento
      ],
      datasets: [
        {
          data: [
            graficoDto[0].votos,
            graficoDto[1].votos,
            graficoDto[2].votos
          ],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ]
        }]
    };

    this.options = {
      title: {
        display: true,
        text: 'Quantidade total de votos - ' + (graficoDto[0].votos + graficoDto[1].votos + graficoDto[2].votos),
        fontSize: 22
      },
      legend: {
        position: 'bottom'
      }
    };
  }

}

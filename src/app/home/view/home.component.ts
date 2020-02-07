import {Component, OnInit} from '@angular/core';
import {EmpreendimentoService} from '../service/empreendimento.service';
import {Empreendimento} from '../model/Empreendimento.model';
import {UtilService} from '../../uteis/util.service';
import {UsuarioService} from '../service/usuario.service';
import {HttpErrorResponse} from '@angular/common/http';
import {VotosService} from '../../votos/service/votos.service';
import {Votacao} from '../../votos/model/Votacao.model';
import {VotacaoDto} from '../../votos/model/VotacaoDto';
import {log} from 'util';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  empreendimentos: Empreendimento[] = [];

  constructor(
    private empreendimentoService: EmpreendimentoService,
    private votosService: VotosService,
    private utilService: UtilService
  ) {
  }

  ngOnInit() {
    this.empreendimentoService.todosEmpreendimentos().then(
      value => {
        this.empreendimentos = value;
      },
      error => {
        console.log(error);
      }
    );
  }

  votar(empreendimento: Empreendimento) {
    if (this.utilService.validarUsuarioAutenticado()) {


      const votacao = new VotacaoDto();
      votacao.idEmpreendimento = empreendimento.id;
      votacao.idUsuario = this.utilService.retornaIdUsuarioAutenticado();

      this.votosService.consultarVotacaoUsuarioId(votacao.idUsuario).then(
        value => {
          console.log(value);
          this.utilService.msgAlerta('Só é permitido apenas 1 voto.');
        },
        error => {
          console.log(error);
          this.votosService.salvarVotacao(votacao).then(
            value => {
              console.log(value);
              this.utilService.msgSucesso('Ao salvar voto.');
            },
            erro => {
              console.log(erro);
              this.utilService.msgErro('Ao salvar voto.');
            }
          );
        }
      );

    } else {
      this.utilService.msgAlerta('Para votar é preciso estar Logado');
    }
  }
}

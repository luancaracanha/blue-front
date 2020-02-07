import {Injectable} from '@angular/core';
import {ApiService} from '../../uteis/api.service';
import {HttpClient} from '@angular/common/http';
import {Usuario} from '../../cadastro/model/Usuario.model';
import {Resources} from '../../uteis/resources.model';
import {Votacao} from '../model/Votacao.model';
import {VotacaoDto} from '../model/VotacaoDto';
import {GraficoDto} from '../model/GraficoDto';

@Injectable({providedIn: 'root'})
export class VotosService extends ApiService {

  constructor(private _http: HttpClient) {
    super(_http);
  }

  public salvarVotacao(votacao: VotacaoDto): Promise<Votacao> {
    return this.post(Resources.blueBack(), 'votacao/salvar', votacao);
  }

  public consultarVotacaoUsuarioId(id: number): Promise<Usuario> {
    return this.get(Resources.blueBack(), `votacao/usuario/` + id);
  }

  public consultarVotacaoTodos(): Promise<Votacao[]> {
    return this.get(Resources.blueBack(), `votacao/todos`);
  }

  public consultarVotacaoGrafico(): Promise<GraficoDto[]> {
    return this.get(Resources.blueBack(), `votacao/grafico`);
  }
}

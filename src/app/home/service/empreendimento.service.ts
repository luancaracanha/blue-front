import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../uteis/api.service';
import { Resources } from '../../uteis/resources.model';
import { Empreendimento } from '../model/Empreendimento.model';

@Injectable({ providedIn: 'root' })
export class EmpreendimentoService extends ApiService {

  constructor(private _http: HttpClient) {
    super(_http);
  }

  public todosEmpreendimentos(): Promise<Empreendimento[]> {
    return this.get(Resources.blueBack(), 'empreendimento/todos');
  }

}

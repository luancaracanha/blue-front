import {Usuario} from '../../cadastro/model/Usuario.model';
import {Empreendimento} from '../../home/model/Empreendimento.model';

export class Votacao {
  id: number;
  data: Date;
  usuario: Usuario;
  empreendimento: Empreendimento;

  constructor() {
    this.empreendimento = new Empreendimento();
    this.usuario = new Usuario();
  }
}

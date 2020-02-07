import {Injectable} from '@angular/core';
import {ApiService} from '../../uteis/api.service';
import {HttpClient} from '@angular/common/http';
import {Resources} from '../../uteis/resources.model';
import {Autenticar} from '../../login/model/Autenticar';
import {Usuario} from '../../cadastro/model/Usuario.model';

@Injectable({ providedIn: 'root' })
export class UsuarioService extends ApiService {

  constructor(private _http: HttpClient) {
    super(_http);
  }

  public salvarUsuario(usuario: Usuario): Promise<Usuario> {
      return this.post(Resources.blueBack(), 'usuario/salvar', usuario);
  }

  public autenticar(autenticar: Autenticar): Promise<Usuario> {
    return this.post(Resources.blueBack(), 'usuario/autenticar', autenticar);
  }
}

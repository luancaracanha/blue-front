import {Component, OnInit} from '@angular/core';
import {UtilService} from '../../uteis/util.service';
import {Usuario} from '../model/Usuario.model';
import {HttpErrorResponse} from '@angular/common/http';
import {UsuarioService} from '../../home/service/usuario.service';

@Component({
  selector: 'app-cadastro',
  styleUrls: ['./cadastro.component.scss'],
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  dialogCadastro: boolean;

  usuario: Usuario = new Usuario();

  confirmaSenha: string;

  constructor(
    private usuarioService: UsuarioService,
    private utilService: UtilService
  ) {
    UtilService.abreCadastro.subscribe(value => this.dialogCadastro = value);
  }

  ngOnInit() {
  }

  salvarCadastro() {
    if (this.usuario.senha && this.confirmaSenha && this.usuario.senha.includes(this.confirmaSenha)) {
      this.usuarioService.salvarUsuario(this.usuario).then(
        value => {
          console.log(value);
          this.utilService.msgSucesso('Sucesso ao salvar usuário');
          this.dialogCadastro = false;
          this.limpar();
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          this.utilService.msgErro(error.error);
        }
      );
    } else {
      this.utilService.msgAlerta('Senha e Confirmar senha não conferem.');
    }
  }

  limpar() {
    this.confirmaSenha = null;
    this.usuario = new Usuario();
  }

}

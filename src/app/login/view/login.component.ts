import {Component, OnInit} from '@angular/core';
import {UtilService} from '../../uteis/util.service';
import {Autenticar} from '../model/Autenticar';
import {HttpErrorResponse} from '@angular/common/http';
import {UsuarioService} from '../../home/service/usuario.service';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  dialogLogin: boolean;

  autenticar: Autenticar = new Autenticar();

  constructor(
    private usuarioService: UsuarioService,
    private utilService: UtilService
  ) {
    UtilService.abreLogin.subscribe(
      value => {
        this.autenticar = new Autenticar();
        this.dialogLogin = value;
      }
    );
  }

  ngOnInit() {}

  logar() {
    if (this.autenticar.email && this.autenticar.senha) {
      this.usuarioService.autenticar(this.autenticar).then(
        value => {
          this.utilService.salvarAutenticacao(value);
          this.utilService.atualizarMenu();
          this.utilService.msgSucesso('Ao realizar login');
          this.dialogLogin = false;
          this.limpar();
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          this.utilService.msgErro(error.error);
        }
      );
    } else {
      this.utilService.msgAlerta('Informe E-mail e Senha');
    }
  }

  limpar() {
    this.autenticar = new Autenticar();
  }

}

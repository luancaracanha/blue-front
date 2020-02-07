import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api/menuitem';
import {MessageService} from 'primeng/api';
import {UtilService} from '../uteis/util.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  styleUrls: ['./menu.component.scss'],
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor(
    private utilService: UtilService,
    private router: Router
  ) {
    UtilService.atualizarMenu.subscribe(
      value => this.ngOnInit()
    );
  }

  ngOnInit() {
    this.items = [
      {label: 'Home', routerLink: ['/home']},
      {label: 'Votos', routerLink: ['/votos'], visible: this.utilService.validarUsuarioAutenticado()},
      {label: 'Cadastrar-se', command: event => this.cadastro(), visible: !this.utilService.validarUsuarioAutenticado()},
      {label: 'Logar', command: event => this.logar(), visible: !this.utilService.validarUsuarioAutenticado()},
      {label: 'Sair', command: event => this.sair(), visible: this.utilService.validarUsuarioAutenticado()}
    ];
  }

  sair() {
    this.utilService.removerAutenticacao();
    this.ngOnInit();
    this.router.navigate(['/home']);
  }

  cadastro() {
    this.utilService.abreCadastro(true);
  }

  logar() {
    this.utilService.abreLogin(true);
  }
}

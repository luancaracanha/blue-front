import {EventEmitter, Injectable} from '@angular/core';
import {MessageService} from 'primeng/api';
import {Usuario} from '../cadastro/model/Usuario.model';

@Injectable({providedIn: 'root'})
export class UtilService {

  static atualizarMenu: EventEmitter<boolean> = new EventEmitter<boolean>();

  static abreLogin: EventEmitter<boolean> = new EventEmitter<boolean>();

  static abreCadastro: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private messageService: MessageService
  ) {
  }

  validarUsuarioAutenticado(): boolean {
    const id = window.localStorage.getItem('id');
    if (id != null) {
      return true;
    } else {
      return false;
    }
  }

  retornaIdUsuarioAutenticado(): number {
    return Number(window.localStorage.getItem('id'));
  }

  salvarAutenticacao(usuario: Usuario) {
    window.localStorage.setItem('id', usuario.id.toString());
  }

  removerAutenticacao() {
    window.localStorage.clear();
  }

  msgErro(msg: string) {
    this.messageService.add({severity: 'error', summary: 'Erro', detail: msg});
  }

  msgSucesso(msg: string) {
    this.messageService.add({severity: 'success', summary: 'Sucesso', detail: msg});
  }

  msgAlerta(msg: string) {
    this.messageService.add({severity: 'warn', summary: 'Alerta', detail: msg});
  }

  atualizarMenu() {
    UtilService.atualizarMenu.emit(true);
  }

  abreLogin(abreLogin: boolean) {
    UtilService.abreLogin.emit(abreLogin);
  }

  abreCadastro(abreCadastro: boolean) {
    UtilService.abreCadastro.emit(abreCadastro);
  }

}

import {Component, OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-menu',
  styleUrls: ['./menu.component.scss'],
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'fa fa-plus', routerLink: ['/home'] },
      { label: 'Votos', icon: 'fa fa-plus', routerLink: ['/votos'] },
    ];
  }

}

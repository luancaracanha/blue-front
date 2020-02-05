import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    // this._service.changeToRegister().subscribe((response) => {
    //   this.showDialogNovaAvaliacao = response;
    // }, (error) => {
    //   console.log(error);
    // });
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: []
})
export class NgSwitchComponent {

  alerta: string = 'info';

  constructor() { }

  cambiarTipo() {
    switch (this.alerta) {
      case 'success': this.alerta = 'warning';
      break;
      case 'warning': this.alerta = 'info';
      break;
      case 'info': this.alerta = 'danger';
      break;
      default: this.alerta = 'success';
    }
  }

}

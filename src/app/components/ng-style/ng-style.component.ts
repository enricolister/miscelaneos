import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
      Hola mundo... esta es una etiqueta
    </p>

    <button class="btn btn-primary mr-3" (click)="tamano = increaseTamano(tamano)">
      <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-primary" [style.backgroundColor]="myColor" (click)="tamano = reduceTamano(tamano)">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: []
})

export class NgStyleComponent {

  tamano: number = 20;
  myColor: string;

  constructor() { }

  increaseTamano = (tamano) => {
    if (this.myColor === 'gray') {
      this.myColor = '';
    }
    return tamano + 5;
  }
  reduceTamano = (tamano) => {
    if (tamano > 5) {
      return tamano - 5;
    }
    else {
      this.myColor = 'gray';
      return tamano;
    }
  }
}

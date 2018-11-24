import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

  <app-ng-style></app-ng-style>

  <app-css></app-css>

  <app-classes></app-classes>

  <br><br>

  <h3>Directiva resaltar</h3>
  <p [appResaltado]="'orange'">Pasar con el raton aqui</p>

  <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

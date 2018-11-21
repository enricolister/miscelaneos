import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styles: []
})
export class ClassesComponent implements OnInit {

  alerta: string = "alert-danger";
  loading: boolean = false;

  propriedades: Object = {
    danger: true
  }

  constructor() { }

  ngOnInit() {
  }

  ejecutar() {
    this.loading = true;
    setTimeout( () => this.loading = false, 3000 );
  }

}

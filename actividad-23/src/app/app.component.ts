import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'actividad-23';
  valor1: any;
  valor2: any;

  suma: any;
  resta: any;
  multiplicacion: any;
  division: any;
  resultadoSuma: any;
  resultadoResta: any;
  resultadoMulti: any;
  resultadoDivi: any;

  constructor() {
  }

  calcular() {
    if(!!this.suma || !!this.resta || !!this.division || !!this.multiplicacion){
      this.resultadoSuma = +this.valor1 + +this.valor2;
      this.resultadoResta = +this.valor1 - +this.valor2;
      this.resultadoMulti = +this.valor1 * +this.valor2;
      this.resultadoDivi = +this.valor1 / +this.valor2;
    }

    console.log(this.valor1, 'VALOR1');
    console.log(this.valor2, 'valor 2');
    console.log(this.suma, 'suma');
    console.log(this.resta, 'RESTA');
    console.log(this.multiplicacion, 'mul');
    console.log(this.division, 'DIVI');

  }


}

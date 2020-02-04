import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esempi-pipes',
  templateUrl: './esempi-pipes.component.html',
  styleUrls: ['./esempi-pipes.component.css']
})
export class EsempiPipesComponent implements OnInit {

//Variabili di appoggoi per provare le pipe
pipeResult: string = '';
pipeResultNumber: number;
pipeResultDate :Date;

  constructor() { }

  ngOnInit() {
  }

}

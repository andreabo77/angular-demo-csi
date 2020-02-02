import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Location, DatePipe} from '@angular/common';
import { Router } from '@angular/router';
import { Anagrafica } from '../model/anagrafica/anagrafica';
import {ElencoComuni} from '../model/common/decodifiche';
import {AnagraficaService} from '../services/anagrafica.service';


@Component({
  selector: 'app-anagrafica-ricerca',
  templateUrl: './anagrafica-ricerca.component.html',
  styleUrls: ['../../css/styles.css','./anagrafica-ricerca.component.css']
})
export class AnagraficaRicercaComponent implements OnInit {

  filter : Anagrafica
  elencoComuni : ElencoComuni;

  elencoAnagrafica : Anagrafica [];
  elementoSelezionato :Anagrafica;

  constructor(private router: Router, 
    private location: Location, 
    private anaService: AnagraficaService) { }

  ngOnInit() {
    this.filter = new Anagrafica();
    this.elencoComuni = ElencoComuni.getAll();
    this.elementoSelezionato = new Anagrafica();
  }

  
  public onChangeComuneNascita(event): void {  
    const codiceComune = event.target.value;
    console.log('AnagraficaRicercaComponent-selezionato comune nascita da evento '+ codiceComune);
    
    const comSelezionato = ElencoComuni.getByCodice(codiceComune);

    //console.log(event); stampa tutto il json dell'evento
    console.log('AnagraficaRicercaComponent-recuperato comune '+ JSON.stringify(comSelezionato, null, 1));
  }

  indietro(): void {
    this.location.back();
}

ricerca(){
  console.log('Effettuo la ricerca anagrafica');
  
  this.anaService.ricercaAnagrafica(this.filter).subscribe(
  result => {this.elencoAnagrafica = result;
  });
 
  }


  onSelectAnagrafica(ana:Anagrafica){
    console.log('AnagraficaRicercaComponent-onSelectAnagrafica selezionata anagrafica ' + ana.cognome);
    this.elementoSelezionato = ana;
  }

  
  visualizzaDettaglio(ana:Anagrafica){
    console.log('AnagraficaRicercaComponent-visualizzaDettaglio ' + this.elementoSelezionato.id);
    this.router.navigate(['/anagrafica/dettaglio', this.elementoSelezionato.id]);

  }

  printModel(){
    console.log('AnagraficaRicercaComponent-Filter = ' + JSON.stringify(this.filter));
    console.log('AnagraficaRicercaComponent-elementoSelezionato = ' + JSON.stringify(this.elementoSelezionato));
    
    }
  
    prove() : void {
      const pipe = new DatePipe('en-US'); // Use your own locale
      const now = Date. now();
      const myFormattedDate = pipe.transform(now, 'dd/MM/yyyy hh:mm:ss - SSS');
      console.log('data formattata ' + myFormattedDate);

      const datamia = new Date(Date.parse('1980-10-5'));
      console.log('data formattata ' + datamia.toLocaleString());


    }

}

import { Component, OnInit, Input } from '@angular/core';
import { Location, DatePipe } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { Anagrafica } from '../model/anagrafica/anagrafica';
import { AnagraficaService } from '../services/anagrafica.service';

@Component({
  selector: 'app-anagrafica-dettaglio',
  templateUrl: './anagrafica-dettaglio.component.html',
  styleUrls: ['../../css/styles.css','./anagrafica-dettaglio.component.css']
})
export class AnagraficaDettaglioComponent implements OnInit {

  @Input()
  dettaglio: Anagrafica

  editing: boolean = false;

  constructor(
    private anaService: AnagraficaService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    /**Cicla tra i parametri del path recupero l'id */
		this.route.params.forEach(
			(params: Params) => {
				let id = +params['id'];
				this.anaService.loadAnagrafica(id).subscribe(anaDett => this.dettaglio = anaDett);
			}
    );
    
    
  }

  edit(): void {
    this.enableEditing();
  }

  save(): void {
    console.log('AnagraficaDettaglioComponent-salvataggio Anagrafica' + this.dettaglio.nome);
    window.alert('AnagraficaDettaglioComponent-salvataggio Anagrafica' + this.dettaglio.nome);
    this.disableEditing();
  }

  goBack(): void {
    this.location.back();
  }

  enableEditing() {
    this.editing = true;
    console.log('AnagraficaDettaglioComponent-entro in editing ' + this.dettaglio.nome);
  }

  disableEditing() {
    this.editing = false;
    console.log('AnagraficaDettaglioComponent-torno in visualizzazione ' + this.dettaglio.nome);

  }

  isVisualizzazione(): boolean {
    return this.editing === false;
  }



}

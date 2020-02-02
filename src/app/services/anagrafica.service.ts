import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable , of} from 'rxjs';


import { Hero } from '../model/heroes/hero';
import { HEROES } from '../mock-heroes';
import { ANAGRAFICHE } from '../mock-anagrafiche';
import { ConfigService } from '../config.service';
import { Anagrafica } from '../model/anagrafica/anagrafica';



@Injectable()
export class AnagraficaService{

	constructor(private http: Http, private config: ConfigService) {
	}

	ricercaAnagrafica(filter : Anagrafica ): Observable<Anagrafica[]> { 
		console.log('AnagraficaService.ricercaAnagrafica');
		var url : string = this.config.getBEServer()+'/tstang2web/restfacade/be/heroes';
		
		return of(ANAGRAFICHE);
	}

	loadAnagrafica(id: number): Observable<Anagrafica> {
		console.log('AnagraficaService.loadAnagrafica id='+id);
		//tre metodi per reperire un record univoco
		var dett : Anagrafica = null;
		
		//Metodo 1: ritorno un dato secco ma casuale
		//dett = ANAGRAFICHE[1];

		//Metodo 2: uso una find su array
		console.log('AnagraficaService-metodo find');
		dett = ANAGRAFICHE.find(ana => ana.id === id);

		//Metodo 3: uso un ciclo forEach ma senza poter usare il break quando trova l'elemento
		
		console.log('AnagraficaService-metodo forEach');
		ANAGRAFICHE.forEach(ana => {
			if(ana.id === id){
				dett = ana;

			}
		});

		//Metodo 4: uso un ciclo for che consente di usare il break
		
		console.log('AnagraficaService-metodo for');
		for(let ana of ANAGRAFICHE) {
			if(ana.id === id){
				dett = ana;
				break;
			} 
		 }

		return of(dett);

		/*
		return  ANAGRAFICHE.forEach(ana => {
			const confInfoAgg = this.infoConfAll.find(conf => conf.codice === infoAggExt.informazioneAggiuntiva.codice_configurazione);
			infoAggExt.descrizione = confInfoAgg
			  ? confInfoAgg.descrizione
			  : infoAggExt.informazioneAggiuntiva.descrizione_configurazione;
			infoAggExt.informazioneAggiuntiva.data = infoAggExt.informazioneAggiuntiva.data ?
				new Date(infoAggExt.informazioneAggiuntiva.data) : null;
		  }
		  */
	}
	
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		 return Promise.reject(error.message || error);
   }

	

}
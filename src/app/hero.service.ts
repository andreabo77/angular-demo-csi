import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


import { Hero } from './model/heroes/hero';
import { HEROES } from './mock-heroes';
import { ConfigService } from './config.service';



@Injectable()
export class HeroService{

	getHeroes(): Promise<Hero[]> {
		var url : string = this.config.getBEServer()+'/tstang2web/restfacade/be/heroes';
		return this.http.get(url).toPromise()
			.then(heroes => heroes.json() as Hero[])
			.catch(this.handleError);
	}

	getHero(id: number): Promise<Hero> {
		return this.getHeroes()
			.then(heroes => heroes.find(hero => hero.id === id));
	}

	ping() : Promise<String> {
		//return Promise.resolve("dummy ping response!");
		var url : string = this.config.getBEServer()+'/tstang2web/restfacade/be/ping';
		return this.http.get(url).toPromise()
			.then(pingResponse => pingResponse.text() as String)
			.catch(this.handleError);
	}

	

	private handleError(error: any): Promise<any> {
	 	console.error('An error occurred', error); // for demo purposes only
  		return Promise.reject(error.message || error);
	}

	constructor(private http: Http, private config: ConfigService) {
	}

}
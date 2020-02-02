import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Location } from '@angular/common';

import { Hero } from './model/heroes/hero';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-hero-detail',
	templateUrl: './hero-detail.component.html',
	styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
	@Input()
	hero: Hero
	
	editing: boolean = false;

	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location
	) {}

	ngOnInit(): void {
		this.route.params.forEach(
			(params: Params) => {
				let id = +params['id'];
				this.heroService.getHero(id)
				.then(hero => this.hero = hero);
			}
		);
	}

	edit(): void {
		this.enableEditing();
  }

  save(): void {
	console.log('salvataggio hero' + this.hero.name);
	window.alert('salvataggio hero' + this.hero.name);
	this.disableEditing();
}

	goBack(): void {
  		this.location.back();
	}

	enableEditing(){
		this.editing = true;
		console.log('entro in editing ' + this.hero.name);
	  }
	
	  disableEditing(){
		this.editing = false;
		console.log('torno in visualizzazione ' + this.hero.name);
		
	  }
	
	  isVisualizzazione(): boolean {
			return this.editing == false;
		}


}
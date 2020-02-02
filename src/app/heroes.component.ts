import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from './model/heroes/hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

import '../css/styles.css';
@Component({
	selector: 'my-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	heroes: Hero[];
	selectedHero: Hero;

	ngOnInit(): void {
		this.getHeroes();
	}

	onSelect(hero: Hero): void {
		console.log('hero selected');
		this.selectedHero = hero;
	}

	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedHero.id]);
	}

	constructor(
		private router: Router,
		private heroService: HeroService
	) {

	}
}



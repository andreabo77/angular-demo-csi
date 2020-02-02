import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {HeroService } from './hero.service';
import {ConfigService} from './config.service';
import {SecurityService} from './security.service';
import {UserInfo} from './model/common/user-info';
import { AnagraficaService } from './services/anagrafica.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
  	providers: [HeroService,ConfigService,AnagraficaService]
})
export class AppComponent implements OnInit{
	title = 'tour of heroes';
	
	constructor(
		private router : Router,
		private heroService: HeroService,
		private securityService : SecurityService,
		private config : ConfigService
	) { }

	currentUser: UserInfo = null;

	ngOnInit(): void {
		this.securityService.getCurrentUser()
			.then(currentUser => this.currentUser = currentUser);
	}

	ssoLogout(){
		// reset server session
		this.securityService.localLogout();
		// go to sso logout
		this.securityService.ssoLogout();
	}

	localLogout(){
		// reset server session
		this.securityService.localLogout();
		// exit from application
		this.router.navigate(["/"]).then(result=>{window.location.href = this.config.getOnAppExitURL();});
	}
}
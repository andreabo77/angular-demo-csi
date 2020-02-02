import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './model/heroes/hero';
//import {UserInfo} from './model/common/user-info';
import * as common from './model/common';

import { HeroService } from './hero.service';
import { SecurityService } from './security.service';
import { ConfigService } from './config.service';


@Component({
	selector: 'my-test-page',
	templateUrl: './test-page.component.html',
	styleUrls: ['./test-page.component.css']
})
export class TestPageComponent {
    pingResponse : String = '<nothing>';
    envParams : String = null;
    ping() : void {
        this.heroService.ping().then(pingResponse => this.pingResponse = pingResponse);
    }

    currentUser: common.UserInfo = null;

    getCurrentUser() : void {
        this.securityService.getCurrentUser().then(currentUser => this.currentUser = currentUser);
    }

    resetPage() : void {
        this.pingResponse = '<nothing>';
        this.currentUser = null;
        this.envParams = '';
    }

    showEnvParams() : void {
        this.envParams = JSON.stringify(this.configService.getBEServer());
    }

    constructor(
		private router: Router,
		private heroService: HeroService,
        private securityService : SecurityService,
        private configService: ConfigService
	) {

	}
}
import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';
import {ConfigService} from './config.service';

import 'rxjs/add/operator/toPromise';

//import {UserInfo} from './model/common/user-info';
import * as common from './model/common';

@Injectable()
export class SecurityService {

    getCurrentUser(){
	var url : string = this.config.getBEServer()+'/tstang2web/restfacade/be/currentUser';
		return this.http.get(url).toPromise()
		.then(pingResponse => pingResponse.json() as common.UserInfo)
		.catch(this.handleError);
	}
    
    /**
     * effettua l'invalidazione della sessione applicativa, sia sul
     * client che sul server, richiamando un apposito servizio di backend
     */
    localLogout(){
    var url : string = this.config.getBEServer()+'/tstang2web/restfacade/be/localLogout';
		return this.http.get(url).toPromise()
		.then(pingResponse => pingResponse.json() as common.UserInfo)
		.catch(this.handleError);
    }

    ssoLogout() : void {
        this.router.navigate(["/"]).then(result=>{window.location.href = this.config.getSSOLogoutURL();});
    }

    private handleError(error: any): Promise<any> {
	 	console.error('An error occurred', error); // for demo purposes only
  		return Promise.reject(error.message || error);
	}

    constructor(
        private http: Http,
        private router : Router, 
        private config: ConfigService) {
	}
} 
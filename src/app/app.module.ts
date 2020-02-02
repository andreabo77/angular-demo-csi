import {HttpClientXsrfModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, XSRFStrategy, CookieXSRFStrategy } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { TestPageComponent } from './test-page.component';

import { HeroService } from './hero.service';
import { ConfigService } from './config.service';
import { SecurityService } from './security.service';

import { AppRoutingModule } from './app-routing.module';
import { AnagraficaRicercaComponent } from './anagrafica-ricerca/anagrafica-ricerca.component';
import { AnagraficaDettaglioComponent } from './anagrafica-dettaglio/anagrafica-dettaglio.component';
import { CambiaColoreDirective } from './directives/cambia-colore.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN',
    })
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    TestPageComponent,
    AnagraficaRicercaComponent,
    AnagraficaDettaglioComponent,
    CambiaColoreDirective
  ],
  providers: [ HeroService, ConfigService, SecurityService
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { TestPageComponent} from './test-page.component';
import { AnagraficaRicercaComponent } from './anagrafica-ricerca/anagrafica-ricerca.component';
import { AnagraficaDettaglioComponent } from './anagrafica-dettaglio/anagrafica-dettaglio.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'testpage', component:  TestPageComponent }, 
  { path: 'anagrafica/ricerca',  component: AnagraficaRicercaComponent },
  { path: 'anagrafica/dettaglio/:id', component: AnagraficaDettaglioComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}